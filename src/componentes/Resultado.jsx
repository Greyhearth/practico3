import React from 'react'
//Toma los valores de las jugadas y el resultado de cada ronda y los muestra por pantalla.
const Resultado = ({ jugadaUsuario, jugadaComputadora, resultado }) => {
  return (
    <div>
      {jugadaUsuario && jugadaComputadora && (
        <>
          <p>Tu elección: {jugadaUsuario}</p>
          <p>Elección de la computadora: {jugadaComputadora}</p>
          <p>Resultado: {resultado}</p>
        </>
      )}
    </div>
  )
}
export default Resultado