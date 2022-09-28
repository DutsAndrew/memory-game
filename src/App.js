import './App.css';
import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import Header from './components/Header';
import GameBoard from './components/GameBoard';

function App() {

  const [currentScore, setCurrentScore] = useState({
    score: 0,
  });

  const [bestScore, setBestScore] = useState({
    score: 0,
  });

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
    const targetTile = e.target.className;
    setSelectedTiles({
      tiles: [...currentTiles, targetTile],
    });
   }

  return (
    <div id='content'>
       < Header currentScore={currentScore} bestScore={bestScore} />
       < GameBoard gameTiles={gameTiles} selectedTiles={selectedTiles} handleClick={handleClick} />
    </div>
  );
}

export default App;
