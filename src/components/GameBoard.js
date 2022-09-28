import React, { useState, useEffect } from 'react';
import '../style/gameBoard.css';
import { cardDeckController } from '../scripts/game-board-helpers';

const GameBoard = props => {

  const { gameTiles, selectedTiles, handleClick } = props;
  const newDeck = cardDeckController(gameTiles, selectedTiles);

  return (
    <div id="game-board">
        <ul id='game-tiles'>
          {newDeck.map((card) => {
            return <div id={card.name} className='game-card' key={card.id} onClick={handleClick} >
              <img id={card.name} className='game-card' src={card.src} alt={card.name}></img>
              <p id={card.name} className='game-card'>{card.name}</p>
            </div>
          })}
        </ul>
    </div>
  )
}

export default GameBoard;