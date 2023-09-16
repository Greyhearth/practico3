import React from 'react'

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