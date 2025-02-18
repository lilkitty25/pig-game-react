import { useState } from "react";

import "./App.css";

function App() {
  // Estado de la aplicación

  const [score, setScore] = useState([0, 0]); // Puntajes de los jugadores

  const [currentScore, setCurrentScore] = useState(0); // Puntaje actual

  const [activePlayer, setActivePlayer] = useState(0); // Jugador activo

  const [gameOver, setGameOver] = useState(false); // Estado de fin de juego

  const [diceImage, setDiceImage] = useState("dice-5.png"); // Imagen del dado

  // Función para inicializar los datos del juego

  const initData = () => {
    setScore([0, 0]);

    setCurrentScore(0);

    setActivePlayer(0);

    setGameOver(false);

    setDiceImage("dice-5.png");
  };

  // Función para tirar el dado

  const throwDice = () => {
    const dice = Math.trunc(Math.random() * 6) + 1;

    setDiceImage(`dice-${dice}.png`);

    if (dice !== 1) {
      setCurrentScore((prev) => prev + dice);
    } else {
      switchPlayer();
    }
  };

  // Cambiar de jugador

  const switchPlayer = () => {
    setActivePlayer((prev) => (prev === 0 ? 1 : 0));

    setCurrentScore(0);
  };
  // Función para guardar el puntaje y verificar si alguien gana

  const hold = () => {
    const newScores = [...score];

    newScores[activePlayer] += currentScore;

    if (newScores[activePlayer] >= 100) {
      endGame();
    } else {
      setScore(newScores);

      switchPlayer();
    }
  };

  // Finaliza el juego

  const endGame = () => {
    setGameOver(true);
  };

  // Función para iniciar un nuevo juego

  const newGame = () => {
    initData();
  };

  return (
    <div className="App">
      <main>
        <section
          className={`player player--0 ${activePlayer === 0 ? "player--active" : ""}`}
        >
          <h2 className="name">Player 1</h2>
          <p className="score">{score[0]}</p>
          <div className="current">
            <p className="current-label">Current</p>
            <p className="current-score">
              {activePlayer === 0 ? currentScore : 0}
            </p>
          </div>
        </section>

        <section
          className={`player player--1 ${activePlayer === 1 ? "player--active" : ""}`}
        >
          <h2 className="name">Player 2</h2>
          <p className="score">{score[1]}</p>
          <div className="current">
            <p className="current-label">Current</p>
            <p className="current-score">
              {activePlayer === 1 ? currentScore : 0}
            </p>
          </div>
        </section>

        <img
          src={diceImage}
          alt="Playing dice"
          className={`dice ${gameOver ? "hidden" : ""}`}
        />
        <button className="btn btn--new" onClick={newGame}>
          🔄 New game
        </button>
        <button
          className="btn btn--roll"
          onClick={throwDice}
          disabled={gameOver}
        >
          🎲 Roll dice
        </button>
        <button className="btn btn--hold" onClick={hold} disabled={gameOver}>
          📥 Hold
        </button>
      </main>

      {gameOver && (
        <div className="game-over">
          <p>Player {activePlayer + 1} wins!</p>
        </div>
      )}
    </div>
  );
}

export default App;
