import React, {useState} from 'react'

export const Nombre = () => {
//   const [nombre, setNombre] = useState("Invitado");

//   const cambiarNombre = (nombre) => {
//     setNombre(nombre);
//   };
    return (
    <div>
        <label for="nombre">Para iniciar, ingrese su nombre: 
            <input type="text" name="nombre" id="nombre" required="required" />
            <input type="button" name="ingresar" value="Ingresar" />
        </label>
    </div>
  )
}
