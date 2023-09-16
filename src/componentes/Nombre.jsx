import React, { useState } from 'react';

const Nombre = () => {
    const [nombreTemp, setNombreTemp] = useState("");
    const [nombre, setNombre] = useState("Invitado");
    const [error, setError] = useState("");
    const [saludo, setSaludo] = useState(false);
 

    function cambiarNombre (nuevoNombre){
     
        if ((nombreTemp.trim() === '')||(nombreTemp.trim() === 'Invitado')){
            setError('Por favor, ingrese su nombre');
            setSaludo(false);
        } else{
            setNombre(nombreTemp);
            setNombreTemp("");
            setError("");
            setSaludo(true);
        }


    }

    return (
    <div>
        <label for="nombre">Bienvenido, para iniciar, ingrese su nombre: 
            <input type="text" name="nombre" value={nombreTemp} id="nombre" required="required" onChange={e => setNombreTemp(e.target.value)} />
            <input type="button" name="ingresar" value="Ingresar" onClick={e => cambiarNombre(nombreTemp)}/>
        </label>
        {error && <p className="error">{error}</p>}
        {saludo && <p className="saludo">Saludos {nombre}, elija una de las siguentes jugadas:</p>}
    </div>
  )
}

export default Nombre;