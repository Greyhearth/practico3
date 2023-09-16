import React from 'react'
import styled from 'styled-components';

const Marcador = styled.div`
  font-size: min(5vw, 0.7em);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

//Toma los valores de los contadores de PiedraPapelTijera.jsx y los muestra por pantalla.
const Marcadores = ({ contadorJugador, contadorEmpates, contadorComputadora }) => {
  return (
    <Marcador className="marcadores">
      <p>Victorias Jugador: {contadorJugador}</p>
      <p>Empates: {contadorEmpates}</p>
      <p>Victorias CPU: {contadorComputadora}</p>
    </Marcador>
  )
}

export default Marcadores;