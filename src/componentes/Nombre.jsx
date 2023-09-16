import React, { useState } from 'react';

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
      <h2>Ingresa tu nombre para comenzar</h2>
      <form onSubmit={ingresarNombre}>
        <input type="text" placeholder="Ingresa tu nombre" value={nombre} onChange={cambioNombre} />
        <button type="submit" disabled={!esValido}>Iniciar Juego</button>
      </form>
    </div>
  );
};

export default Nombre;