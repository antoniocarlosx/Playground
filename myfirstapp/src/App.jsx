function App(props) {

  const currDate = new Date();

  return (
      <div>
        <h1>Antonio Carlos</h1>
        <h2>Hoje é dia: {currDate.toLocaleDateString('pt-BR')} e a Hora agora é: {currDate.toLocaleTimeString()}</h2>
      </div>
  );
}

export default App;