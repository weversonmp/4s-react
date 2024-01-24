const { useState } = require("react");

function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React JS'
  ]);

  function salvarRegistro(e) {
    e.preventDefault()

    setTarefas([...tarefas, input])
    setInput('');
  }

  return (
    <div>
      <h1>Cadastrando Usuário</h1>

      <form onSubmit={salvarRegistro}>
        <label>Nome da Tarefa:</label> <br />
        <input
          placeholder="Digite uma tarefa"
          value={input}
          onChange={(e) => { setInput(e.target.value) }}
        />

        <br />
        <br />

        <button type="submit">Registrar</button>
      </form>
      <br />
      <br />

      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;