import React from 'react'

const Marcadores = ({ contadorJugador, contadorComputadora }) => {
  return (
    <div className="marcadores">
      <p>Victorias Jugador: {contadorJugador}</p>
      <p>Victorias Computadora: {contadorComputadora}</p>
    </div>
  )
}

export default Marcadores;