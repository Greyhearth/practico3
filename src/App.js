import './App.css';
import Encabezado from './componentes/Encabezado';
import Nombre from './componentes/Nombre';
import { Jugadas } from './componentes/Jugadas';
import { Marcadores } from './componentes/Marcadores';
import { Reiniciar } from './componentes/Reiniciar';
import { Resultado } from './componentes/Resultado';


function App() {
  /* Declaración de constantes y variables */


  return (
    <div className="App">
      <header className="App-header">
        <Encabezado/>
      </header>

      <main className="App-main">
        <Nombre/>

        <Jugadas/>

        <Resultado/>

        <Marcadores/>

        <Reiniciar/>
      </main>
    </div>
  );
}

export default App;
