import './App.css';
import Encabezado from './componentes/Encabezado';
import Nombre from './componentes/Nombre';
import PiedraPapelTijera from './componentes/PiedraPapelTijera';



function App() {
  /* Declaración de constantes y variables */


  return (
    <div className="App">
      <header className="App-header">
        <Encabezado/>
      </header>

      <main className="App-main">
        <Nombre/>

        <PiedraPapelTijera/>
      </main>
    </div>
  );
}

export default App;
