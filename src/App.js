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
    }

    if (amount === 1) {
      setCurrentScore({
        score: currentScore.score + 1,
      });
      
      if (bestScore.score <= currentScore.score) {
        setBestScore({
          score: bestScore.score + 1,
        });
      }
    }
  }

  // handle and resolve win
  useEffect(() => {
    if (currentScore.score === 8 || bestScore.score === 8) {
      alert('You won, feel free to try again :)');

      setTimeout(() => {
        setCurrentScore({
          score: 0,
        });
        setBestScore({
          score: 0,
        });
      }, 1000);

    }
  }, [currentScore, bestScore])

  return (
    <div id='content'>
       < Header currentScore={currentScore} bestScore={bestScore} />
       < GameBoard updateScore={updateScore} />
    </div>
  );
}

export default App;
