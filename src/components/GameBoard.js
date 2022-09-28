import React, { useState, useEffect } from 'react';
import '../style/gameBoard.css';

const GameBoard = props => {

  const { gameTiles, selectedTiles, handleClick } = props;
  const newDeck = buildCardDeck(gameTiles, selectedTiles);

  // console.log(newDeck);
  // console.log(selectedTiles);

  return (
    <div id="game-board">
      <div id="game-tiles">
        <ul>
          {newDeck.map((card) => {
            return <div className={card.name} key={card.id} onClick={handleClick} >
              <img className={card.name} src={card.src} alt={card.name}></img>
              <p className={card.name}>{card.name}</p>
            </div>
          })}
        </ul>
      </div>
    </div>
  )
}

function buildCardDeck(gameTiles, selectedTiles) {

  if (selectedTiles.tiles.length === 0) {
    return gameTiles;
  } else {
    const randomSet = generateRandomNumberArray(gameTiles);
    const buildNextDeck = sortNextDeck(gameTiles, randomSet);
    return buildNextDeck;
  }
}

function generateRandomNumberArray(gameTiles) {
  const numbersArray = [];
  let currentNumber = 0;
  while (numbersArray.length < 8) {
    currentNumber = Math.floor(Math.random() * 8);
    if (numbersArray.includes(currentNumber)) {
      currentNumber = Math.floor(Math.random() * 8);
    } else {
      numbersArray.push(currentNumber);
    }
  }
  return numbersArray;
}

function sortNextDeck(gameTiles, randomSet) {
  const nextDeck = [];
  randomSet.forEach(number => {
    const matchedTile = gameTiles[number];
    nextDeck.push(matchedTile);
  });
  return nextDeck;
}

export default GameBoard;