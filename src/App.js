import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import GameBoard from './components/GameBoard';

function App() {

  const [currentScore, setCurrentScore] = useState({
    score: 0,
  });

  const [bestScore, setBestScore] = useState({
    score: 0,
  });

  return (
    <div id='content'>
       < Header currentScore={currentScore} bestScore={bestScore} />
       < GameBoard />
    </div>
  );
}

export default App;
