import React, { useState, useEffect } from 'react';

const Header = props => {
  const { currentScore, bestScore } = props;
  return (
    <div id='header'>
      <div id='header-top'>
        <p id="website-title">Memory Game</p>
        <p id="best-score">Best Score: {bestScore.score}</p>
        <p id="current-score">Current Score: {currentScore.score}</p>
      </div>
    </div>
  )
}

export default Header;