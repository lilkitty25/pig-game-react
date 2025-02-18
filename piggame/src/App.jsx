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
  

export default App;
