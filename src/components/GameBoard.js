import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import '../style/gameBoard.css';
import { cardDeckController } from '../scripts/game-board-helpers';

const GameBoard = props => {

  const { updateScore } = props;

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
    tiles: [],
  });

  const handleClick = (e) => {
    const currentTiles = selectedTiles.tiles;
    const targetTile = e.target.id;

    // for very first click, when selectedTiles is empty
    if (selectedTiles.tiles.length === 0) {
      setSelectedTiles({
        tiles: [...currentTiles, targetTile],
      });
      updateScore(1);
      return;
    }

    // for once there are values in selected tiles
    for (let i = 0; i < selectedTiles.tiles.length; i++) {
      if (selectedTiles.tiles[i] === targetTile) {
        setSelectedTiles({
          tiles: [],
        });
        updateScore(0);
        return;
      } else {
        setSelectedTiles({
          tiles: [...currentTiles, targetTile],
        });
        updateScore(1);
      }
    }
  }

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