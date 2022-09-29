import React, { useState, useEffect } from 'react';
import { cardDeckController } from '../scripts/game-board-helpers';
import uniqid from 'uniqid';
import '../style/gameBoard.css';

import bastilla from '../assets/bastilla.jpg';
import bountyHunter from '../assets/bounty-hunter.jpg';
import darthMalak from '../assets/darth-malak.jpg';
import darthNihlus from '../assets/darth-nihlus.jpg';
import darthRevan from '../assets/darth-revan.png';
import hk47 from '../assets/hk-47.jpg';
import kotorCharacters from '../assets/kotor-characters.jpg';
import kotorCover from '../assets/kotor-cover.jpg';

const GameBoard = props => {

  const { updateScore } = props;

  const [gameTiles, setGameTiles] = useState([
    { 
      name: 'Bastilla',
      src: bastilla,
      id: uniqid(),
    },
    { 
      name: 'Bounty Hunter',
      src: bountyHunter,
      id: uniqid(),
    },
    {
      name: 'Darth Malak',
      src: darthMalak,
      id: uniqid(),
    },
    {
      name: 'Darth Nihlus',
      src: darthNihlus,
      id: uniqid(),
    },
    {
      name: 'Darth Revan',
      src: darthRevan,
      id: uniqid(),
    },
    { 
      name: 'HK-47',
      src: hk47,
      id: uniqid(),
    },
    {
      name: 'Kotor Characters',
      src: kotorCharacters,
      id: uniqid(),
    },
    {
      name: 'Kotor Cover',
      src: kotorCover,
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