import './App.css';
import React, { useState } from 'react';
import Encabezado from './componentes/Encabezado';
import Nombre from './componentes/Nombre';
import PiedraPapelTijera from './componentes/PiedraPapelTijera';



function App() {
  /* Declaración de constantes y variables */
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [inicioJuego, setInicioJuego] = useState(false);

  const ingresarNombre = (usuario) => {
    setNombreUsuario(usuario);
    setInicioJuego(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Encabezado/>
      </header>

      <main className="App-main">
      {/*Uso un condicional para que el juego inicie una vez ingresado un nombre válido*/}
      {inicioJuego ? (
        <PiedraPapelTijera nombreUsuario={nombreUsuario} />
      ) : (
        <Nombre ingresarUsuario={ingresarNombre} />
      )}
      </main>
    </div>
  );
}

export default App;
