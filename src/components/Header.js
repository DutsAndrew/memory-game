import React, { useState, useEffect } from 'react';
import '../style/header.css';

const Header = props => {
  const { currentScore, bestScore } = props;
  return (
    <div id='header'>
      <p id="website-title">Memory Game</p>
      <div id='score-container'>
        <p id="best-score">Best Score: {bestScore.score}</p>
        <p id="current-score">Current Score: {currentScore.score}</p>
      </div>
    </div>
  )
}

export default Header;