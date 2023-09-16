import React from 'react'
import styled from 'styled-components'

const Resultados = styled.div`
  font-size: min(5vw, 0.8em);
  font-weight: bold;
  margin-top:10px;
`

//Toma los valores de las jugadas y el resultado de cada ronda y los muestra por pantalla.
const Resultado = ({ jugadaUsuario, jugadaComputadora, resultado }) => {
  return (
    <div>
      {jugadaUsuario && jugadaComputadora && (
        <>
          <Resultados>Tu elección: {jugadaUsuario}</Resultados>
          <Resultados>Elección de la computadora: {jugadaComputadora}</Resultados>
          <Resultados>Resultado: {resultado}</Resultados>
        </>
      )}
    </div>
  )
}
export default Resultado