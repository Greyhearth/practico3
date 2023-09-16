import React, { useState, useEffect } from 'react';
import Marcadores from './Marcadores';
import Resultado from './Resultado';
import piedraN from './imagenes/piedraNegro.png'
import papelN from './imagenes/papelNegro.png'
import tijeraN from './imagenes/tijeraNegro.png'


const PiedraPapelTijera = () => {
  const jugadas = ['piedra', 'papel', 'tijera'];
  const [jugadaUsuario, setJugadaUsuario] = useState(null);
  const [jugadaComputadora, setJugadaComputadora] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [contadorJugador, setContadorJugador] = useState(0);
  const [contadorComputadora, setContadorComputadora] = useState(0);
  const [ronda, setRonda] = useState(1);

  useEffect(() => {
    if (ronda > 5) {
      // Corrobora la ronda y verifica si hay algún ganador
      if (contadorJugador > contadorComputadora) {
        setResultado('¡Ganaste el juego!');
      } else if (contadorJugador < contadorComputadora) {
        setResultado('La computadora ganó el juego.');
      } else {
        setResultado('El juego terminó en empate.');
      }
    }
  }, [ronda, contadorJugador, contadorComputadora]);


  const eleccionJugada = (jugada) => {
    //Función que obtiene, al azar, una jugada para la computadora.
    const obtenerJugadaComputadora = jugadas[Math.floor(Math.random() * 3)]; //en base a un número aleatorio multiplicado por 3 y redondeado hacia abajo, elige un elemento del array jugadas
    setJugadaUsuario(jugada);
    setJugadaComputadora(obtenerJugadaComputadora);

    // Determinación del ganador de cada ronda
    //Primero corrobora un empate
    if (jugada === obtenerJugadaComputadora) {
      setResultado('Empate');
    //Luego verifica si gana el usuario
    } else if (
      (jugada === 'piedra' && obtenerJugadaComputadora === 'tijera') ||
      (jugada === 'papel' && obtenerJugadaComputadora === 'piedra') ||
      (jugada === 'tijera' && obtenerJugadaComputadora === 'papel')
    ) {
      setResultado('el usuario gana la ronda');
      setContadorJugador(contadorJugador+1);
    //Finalmente, le da la victoria a la computadora
    } else {
      setResultado('la computadora gana la ronda');
      setContadorComputadora(contadorComputadora+1);
    }
    //Suma 1 al contador de rondas
    setRonda(ronda+1);
  };

  return (
    <div>
      <div className="jugadas">
        <button onClick={() => eleccionJugada('piedra')}><img src={piedraN} alt='Piedra'/></button>
        <button onClick={() => eleccionJugada('papel')}><img src={papelN} alt='Papel'/></button>
        <button onClick={() => eleccionJugada('tijera')}><img src={tijeraN} alt='Tijera'/></button>
      </div>
      <Resultado
        jugadaUsuario={jugadaUsuario}
        jugadaComputadora={jugadaComputadora}
        resultado={resultado}
      />
      <Marcadores contadorJugador={contadorJugador} contadorComputadora={contadorComputadora} />
    </div>
  );
};

export default PiedraPapelTijera;