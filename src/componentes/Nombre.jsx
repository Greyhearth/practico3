import React, { useState } from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
  color: #043d72;
  font-weight: bold;
  font-size: min(5vw, 1em);
`
const Form = styled.form`
margin-bottom:20px;
`
const Input = styled.input`
border: 2px solid #1073d0;
background-color: #f7f7f7;
border-radius: 2px;
color: #1073d0;
margin-right: 2px;
&:focus{
  background-color: #ffffff;
  border: 2px solid orange;
  outline: none;
}
`

const Boton = styled.button`
  border: none;
  border-radius: 6px;
  background-color: #0761b6;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  margin-left: 2px;
  &:hover {
    background-color: #003669;
} &:disabled{
    background-color: #4b6175;
    color: #9c9d9e;
}
`

const Nombre = ({ ingresarUsuario }) => {
  const [nombre, setNombre] = useState('');
  const [esValido, setEsValido] = useState(false);
//Vuelve válido un nombre si se ha escrito algo.
  const cambioNombre = (e) => {
    const nombreTemp = e.target.value;
    //Como React renderiza constantemente, debí usar una variable más para guardar el nombre escrito hasta ser ingresado.
    setNombre(nombreTemp);
    //Verifica que no este vacío ni sean sólo espacios en blanco.
    setEsValido(nombreTemp.trim() !== '');
  };
//Si el nombre es válido, permite su ingreso y se inicia el juego.
  const ingresarNombre = (e) => {
    e.preventDefault();
    if (esValido) {
        ingresarUsuario(nombre);
    }
  };

  return (
    <div>
      <H2>Ingresa tu nombre para comenzar</H2>
      <Form onSubmit={ingresarNombre}>
        <Input type="text" placeholder="Ingresa tu nombre" value={nombre} onChange={cambioNombre} />
        <Boton type="submit" disabled={!esValido}>Iniciar Juego</Boton>
      </Form>
    </div>
  );
};

export default Nombre;