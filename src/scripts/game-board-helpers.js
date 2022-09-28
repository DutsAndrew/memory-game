export {
  cardDeckController,
}

function cardDeckController(gameTiles, selectedTiles) {

  if (selectedTiles.tiles.length === 0) {
    return gameTiles;
  } else {
    const randomSet = generateRandomNumberArray(gameTiles);
    const nextDeck = buildNextDeck(gameTiles, randomSet);
    return nextDeck;
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

function buildNextDeck(gameTiles, randomSet) {
  const deck = [];
  randomSet.forEach(number => {
    const matchedTile = gameTiles[number];
    deck.push(matchedTile);
  });
  return deck;
}