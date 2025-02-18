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
  

export default App;
