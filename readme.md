# Tic-Tac-Naruto

### Approach

I knew that a regular tic-tac-toe game consisted of a 3x3 tile and required 2 players. What I wanted from my game is to look and feel dynamic and originally planned to use html canvas to draw my game. However that is another set of skills I'm yet to learn and there is a short time constraint which made me rethink I needed to build a working game first and 'beautify' it later.

For me games should give some sort of challenge to the user, entertain and want to make others also play it. So I decided I wouldn't use fonts for my naughts and crosses, instead opting for images instead which I can use CSS to animate. Also I wanted my game to be scalable, so instead of gamers playing on a 3x3 tile they can choose 4x4, 5x5 and 6x6 tiles. I knew I needed to build an array where it can check every row and every column including diagonals for the same element, independant of its size.

### Building the game

Building the game board I used jQuery to select the DOM elements and used methods to create new DOM elements and add CSS properties so that it will fit onto the game area I had assigned.
I looped through creating new div elements using a for loop with the limit of maximum game size. The

---

### What I have learnt
- I learnt how to use data-values from html and use that in my javascript code.
- Using CSS to animate images in an infinite loop
- Use of the every method for an array.
- learn how to generate data-values like an array row and column values to the DOM.
- Naming functions and variables make it much easier to understand what the code is doing.

---

### Unsolved Problems
- Making the screen responsive so it can fit on mobile devices.

---

### To Do List
- I will like to clean up my code and learn more how I can further improve how the game is generated onto the DOM and how the computer reads the players input.
- Player scores are not very obvious, needs some tweaking.
- Making the code more readable.

---

### Future Features
- I want to add in character selection and have different
- A banner that overlays the game when a game condition has method
- Animated characters on either side of the game board that move when a player clicks a tile on the gameboard to simulate interaction.
- Make the game responsive for different screen sizes.
- Create custom GIFs for the game to make it more visually engaging
