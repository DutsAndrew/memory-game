import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import '../style/gameBoard.css';

const GameBoard = props => {
  const [gameTiles, setGameTiles] = useState([
    { 
      name: 'Bastilla',
      src: '../assets/bastilla.jpg',
      id: uniqid(),
    },
    { 
      name: 'Bounty Hunter',
      src: '../assets/bounty-hunter.jpg',
      id: uniqid(),
    },
    {
      name: 'Darth Malak',
      src: '../assets/darth-malak.jpg',
      id: uniqid(),
    },
    {
      name: 'Darth Nihlus',
      src: '../assets/darth-nihlus.jpg',
      id: uniqid(),
    },
    {
      name: 'Darth Revan',
      src: '../assets/darth-revan.png',
      id: uniqid(),
    },
    { 
      name: 'HK-47',
      src: '../assets/hk-47.jpg',
      id: uniqid(),
    },
    {
      name: 'Kotor Characters',
      src: '../assets/kotor-characters.jpg',
      id: uniqid(),
    },
    {
      name: 'Kotor Cover',
      src: '../assets/kotor-cover.jpg',
      id: uniqid(),
    },
  ]);

  const [selectedTiles, setSelectedTiles] = useState({
    // save previous and current selected images here
  });

  const newDeck = buildCardDeck(gameTiles, selectedTiles);

  console.log(newDeck);

  return (
    <div id="game-board">
      <div id="game-tiles">
        <ul>
          {newDeck.map((card) => {
            return <div key={card.id} >
              <img src={card.src} alt='star-wars character'></img>
              {card.name}
            </div>
          })}
        </ul>
      </div>
    </div>
  )
}

function buildCardDeck(gameTiles, selectedTiles) {
  let searchStatus = false;
  const builtArray = [];

  if (selectedTiles.length === undefined) {
    return gameTiles;
  }
  
}

export default GameBoard;