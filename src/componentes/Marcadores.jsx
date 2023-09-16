import React from 'react'
//Toma los valores de los contadores de PiedraPapelTijera.jsx y los muestra por pantalla.
const Marcadores = ({ contadorJugador, contadorEmpates, contadorComputadora }) => {
  return (
    <div className="marcadores">
      <p>Victorias Jugador: {contadorJugador}</p>
      <p>Empates: {contadorEmpates}</p>
      <p>Victorias Computadora: {contadorComputadora}</p>
    </div>
  )
}

export default Marcadores;