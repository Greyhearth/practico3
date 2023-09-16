import React from 'react'
import styled from 'styled-components';

const H1 = styled.h1`
font-size: min(5vw, 1.2em);
`

const Encabezado = () => {
  return (
    <div>
        <H1>Piedra, Papel o Tijera</H1>  
    </div>
  )
}
export default Encabezado;