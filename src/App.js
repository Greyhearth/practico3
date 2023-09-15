// import logo from './logo.svg';
import './App.css';
import { Encabezado } from './componentes/Encabezado';
import { Jugadas } from './componentes/Jugadas';
import { Nombre } from './componentes/Nombre';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Encabezado/>
      </header>

      <main className="App-main">
        <Nombre/>

        <Jugadas/>
      </main>
    </div>
  );
}

export default App;
