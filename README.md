# Piedra, Papel o Tijera en React

Una aplicación para jugar al tradicional "Piedra, Papel o Tijera" contra la CPU al mejor de 5 rondas, creado en React

## ¿Cómo se juega? 🚀

1- La aplicación empieza solicitando al usuario un nombre.

    1a- No dejará hacer el ingreso hasta que el campo no este vacío.

    1b- Para ingresarlo, al presionar el botón "Iniciar Juego"

2- Luego de un saludo con el nombre de usuario elegido, se solicita elegir una de las 3 jugadas posibles.

3- Al elegir la jugada, la misma queda sombreada y se decide una jugada al azar para la computadora y ver quien ganó la ronda.

4- Los marcadores llevan la cuenta de cuantas victorias tiene el jugador y la computadora.

    4a- Los empates son sólo estadísticos, no determinan al ganador.

    4b- Cuando uno de los 2 marcadores de victorias llega a 3 (mejor de 5) se decide un ganador y termina el juego.

5- Para volver a empezar se debe presionar el botón "Reiniciar Juego"

## Datos de Desarrollo 🛠️

Se reutilizaron casi todas las funciones creadas para el Práctico 2 con algunas excepciones.

    - El botón "Jugar" se eliminó y ahora el juego decide el ganador al presionar la jugada.

El estilo fue implementado usando la librería Styled-Components.

    - El CSS base usado en cada componente es el mismo que el del Práctico 2, adaptado a JSX.

Los íconos de las jugadas son los mismos que el Practico 2.

Las funciones del Práctico 2 se dividieron en componentes.

    - Hay 1 componente padre ("App.js") que llama a los 2 principáles del juego ("Nombre.jsx" y "PiedraPapelTijera.jsx") y al Encabezado.jsx que siempre es visible.

        - Según si se ha ingresado o no el nombre, App.js mostrará Nombre.jsx o PiedraPapelTijera.jsx, respectivamente.
    
    - Nombre.jsx valida que el nombre ingresado no este vacío y permite llamar a la función "ingresarNombre()" que guarda el valor y cambia el valor de inicioJuego de "false" a "true"

    - PiedraPapelTijera.jsx es, a su vez, padre de los componentes Marcadores.jsx, Resultado.jsx, Reiniciar.jsx.

        - Marcadores.jsx recibe información sobre los contadores de victorias y empates, y los muestra por pantalla.

        - Resultado.jsx recibe información sobre las jugadas y el resultado de cada ronda, y los muestra por pantalla.

        - Reiniciar.jsx se usa para activar la función "reiniciarJuego()" dentro de PiedraPapelTijera.jsx, que devuelve todos los valores a los iniciales.

## Autor ✒️

* **Gustavo Grisetti** - [Greyhearth](https://github.com/Greyhearth)