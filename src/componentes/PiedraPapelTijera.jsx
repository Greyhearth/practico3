import React, { useState, useEffect } from 'react';
import Marcadores from './Marcadores';
import Resultado from './Resultado';
import piedraN from './imagenes/piedraNegro.png'
import papelN from './imagenes/papelNegro.png'
import tijeraN from './imagenes/tijeraNegro.png'
import piedraG from './imagenes/piedraGris.png'
import papelG from './imagenes/papelGris.png'
import tijeraG from './imagenes/tijeraGris.png'
import styled from 'styled-components';

const Saludo = styled.p`
  color: #043d72;
  font-weight: bold;
  font-size: min(5vw, 1em);
`

const Reinicio = styled.p`
  font-size: min(5vw, 0.7em);
  font-weight: bold;
  margin-top:10px;
`

const Boton = styled.button`
  border: none;
  border-radius: 6px;
  background-color: #0761b6;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  &:hover {
    background-color: #003669;
}
`

const PiedraPapelTijera = ({nombreUsuario}) => {
  //Declaración de variables y constantes a usar.
  const jugadas = ['piedra', 'papel', 'tijera'];
  const [jugadaUsuario, setJugadaUsuario] = useState(null);
  const [jugadaComputadora, setJugadaComputadora] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [resultadoFinal, setResultadoFinal] = useState(null);
  const [contadorJugador, setContadorJugador] = useState(0);
  const [contadorComputadora, setContadorComputadora] = useState(0);
  const [contadorEmpates, setContadorEmpates] = useState(0);
  const [piedra, setPiedra] = useState(piedraN);
  const [papel, setPapel] = useState(papelN);
  const [tijera, setTijera] = useState(tijeraN);

  useEffect(() => {
    // Verifica si hay algún ganador tras cada ronda
    if (contadorJugador >= 3) {
        setResultadoFinal('¡Ganaste el juego!');
      } else if (contadorComputadora >= 3) {
        setResultadoFinal('La computadora ganó el juego.');
      }
  }, [contadorJugador, contadorComputadora]);

  const eleccionJugada = (jugada) => {
    //Función que obtiene, al azar, una jugada para la computadora.
    const obtenerJugadaComputadora = jugadas[Math.floor(Math.random() * 3)]; //en base a un número aleatorio multiplicado por 3 y redondeado hacia abajo, elige un elemento del array jugadas
    setJugadaComputadora(obtenerJugadaComputadora);
    setJugadaUsuario(jugada);

    // Determinación del ganador de cada ronda
    //Primero corrobora un empate
    if (jugada === obtenerJugadaComputadora) {
      setResultado('Empate');
      setContadorEmpates(contadorEmpates+1);
    //Luego verifica si gana el usuario
    } else if (
      (jugada === jugadas[0] && obtenerJugadaComputadora === jugadas[2]) ||
      (jugada === jugadas[1] && obtenerJugadaComputadora === jugadas[0]) ||
      (jugada === jugadas[2] && obtenerJugadaComputadora === jugadas[1])
    ) {
      setResultado('el usuario gana la ronda');
      setContadorJugador(contadorJugador+1);
    //Finalmente, le da la victoria a la computadora si no se cumple otra condición
    } else {
      setResultado('la computadora gana la ronda');
      setContadorComputadora(contadorComputadora+1);
    }
  };

  const reiniciarJuego = () => {
    setJugadaUsuario(null);
    setJugadaComputadora(null);
    setResultado(null);
    setContadorJugador(0);
    setContadorComputadora(0);
    setContadorEmpates(0);
    setResultadoFinal(null);
    setPiedra(piedraN);
    setPapel(papelN);
    setTijera(tijeraN);
  };

  return (
    <div>
      <div className="jugadas">
        <Saludo>Saludos {nombreUsuario}, elije una de las siguientes jugadas: </Saludo>
      </div>
    {(resultadoFinal===null) &&
      <div className="jugadas">
        <button onClick={() => {eleccionJugada('piedra'); setPiedra(piedraG); setPapel(papelN); setTijera(tijeraN)}}><img src={piedra} alt='Piedra'/></button>
        <button onClick={() => {eleccionJugada('papel'); setPiedra(piedraN); setPapel(papelG); setTijera(tijeraN)}}><img src={papel} alt='Papel'/></button>
        <button onClick={() => {eleccionJugada('tijera'); setPiedra(piedraN); setPapel(papelN); setTijera(tijeraG)}}><img src={tijera} alt='Tijera'/></button>
      </div>
    }
      <Resultado
        jugadaUsuario={jugadaUsuario}
        jugadaComputadora={jugadaComputadora}
        resultado={resultado}
      />
      <Marcadores 
        contadorJugador={contadorJugador} 
        contadorEmpates={contadorEmpates} 
        contadorComputadora={contadorComputadora} />
      {resultadoFinal && (
        <>
            <Saludo>{resultadoFinal}</Saludo>
            <Reinicio>Presiona "Reiniciar Juego" para volver a jugar</Reinicio>
        </>
        )}
        <div className="reiniciar">
            <Boton onClick={() => reiniciarJuego()}>Reiniciar Juego</Boton>
      </div>
    </div>
  );
};

export default PiedraPapelTijera;