import React from 'react'
import piedra from './imagenes/piedraNegro.png'
import papel from './imagenes/papelNegro.png'
import tijera from './imagenes/tijeraNegro.png'

export const Jugadas = () => {
    function piedraPapelTijera(jugada){
        switch(jugada){
            case "piedra":
                window.alert("Eligio piedra");
                break;
            case "papel":
                window.alert("Eligio papel");
                break;
            case "tijera":
                window.alert("Eligio tijera");
                break;
            default:
                window.alert("Error: jugada no válida");
        }
    }
  
  return (
    <div>
        <img src={piedra} alt="piedra" id="piedra" ></img>
        <img src={papel} alt="papel" id="papel" ></img>
        <img src={tijera} alt="tijera" id="tijera" ></img>
    </div>
  )
}
