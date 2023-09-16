import React from 'react';
//Un botón que ejecuta la función para reiniciar los valores en cualquier momento de la partida.
const Reiniciar = ({ reiniciarJuego }) => {
  return (
    <div className="boton-reinicio">
      <button onClick={reiniciarJuego}>Reiniciar Juego</button>
    </div>
  );
};

export default Reiniciar;