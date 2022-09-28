import './style/App.css';
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

  const updateScore = (amount) => {
    if (amount === 0) {
      setCurrentScore({
        score: 0,
      });
      return;
    } else {
      setCurrentScore({
        score: currentScore.score + 1,
      });
      
      if (bestScore.score <= currentScore.score) {
        setBestScore({
          score: bestScore.score + 1,
        });
      } else if (bestScore.score > currentScore.score) {
        return;
      }
    }
  }

  return (
    <div id='content'>
       < Header currentScore={currentScore} bestScore={bestScore} />
       < GameBoard updateScore={updateScore} />
    </div>
  );
}

export default App;
