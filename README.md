Top-Down Build:
1. Header
- Game Title
- Start Game Button
- Current Score, which updates on each successful click, and resets to 0 on bad click
- Best Score, which is saved as current score goes up, if current score ever surpasses best score, then update best score until it resets to 0

2. Body
- Game tiles, show 8 at a time, pull from state, render them randomly 
- On game tile click, if the card type hasn't been clicked before, update the current score + 1, save to state which card was clicked, if card was clicked reset the current score to 0, check if the best score was saved; if it wasn't save it as best score
- rerender the page and load another 8 images from state in random order
- continue until all 8 cards are selected or score was reset at 0