# Tic-Tac-Naruto

[Click here to see the game](https://gerardworks.github.io/GAProject1TicTacToe/)


![alt text](images/gamescreenshot.png "Logo Title Text 1")

Technologies used:
HTML, CSS, Javascript, jQuery

### Approach

I knew that a regular tic-tac-toe game consisted of a 3x3 tile and required 2 players. What I wanted from my game is to look and feel dynamic and originally planned to use html canvas to draw my game. However that is another set of skills I'm yet to learn and there is a short time constraint which made me rethink I needed to build a working game first and 'beautify' it later.

For me games should give some sort of challenge to the user, entertain and want to make others also play it. So I decided I wouldn't use fonts for my naughts and crosses, instead opting for images instead which I can use CSS to animate. Also I wanted my game to be scalable, so instead of gamers playing on a 3x3 tile they can choose 4x4, 5x5 and 6x6 tiles. I knew I needed to build an array where it can check every row and every column including diagonals for the same element, independent of its size. Players engaged in a 4x4 grid and higher will almost never experience a win unless the number of inline game elements are reduced.



### Building the game

Building the game board I used jQuery to select the DOM elements and used methods to create new DOM elements and add CSS properties so that it will fit onto the game area I had assigned.
I looped through creating new div elements using a for loop with the limit of maximum game size.

I had originally started the game logic with simple if and else statements, but found it is not scalable at all as I will need to write every condition for a win. Instead I used a javascript method to check if the player has won which is .every() to check each line of the 2-D array including columns. The diagonals are checked through the same method but first a 1-D array is created in the format to suit the .every() method.

To notify the players if a winner has won, the game would stop and players can no longer add in additional game pieces and a text would appear at the top of the game board stating which player has won.

I found it enjoyable to build the game logic more than fiddling with html and css even though it is much easier and took less time to do. I can see that the method I took to build the game tiles, it is quite possible to build other games similar to this.

---

### What I have learnt
- I learnt how to use data-values from html and use that in my javascript code.
- Using CSS to animate images in an infinite loop
- Use of the .every() method for an array.
- learn how to generate data-values like an array row and column values to the DOM.
- Naming functions and variables make it much easier to understand what the code is doing.
- Clearing floats by adding in an empty div with css settings to clear : both.
- I have learnt I could have built my code using binary code methods.

---

### Unsolved Problems
- Making the screen responsive so it can fit on mobile devices.


---

### To Do List
- ~~I will like to clean up my code and learn more how I can further improve how the game is generated onto the DOM and how the computer reads the players input.~~ Completed
- Player scores are not very obvious, needs some tweaking.
- Making the code more readable.


---

### Future Features
- I would like to add in character selection and have different game animations.
- A banner that overlays the game when a game condition has been met.
- Animated characters on either side of the game board that move when a player clicks a tile on the gameboard to simulate interaction.
- Make the game responsive for different screen sizes.
- Create custom GIFs for the game to make it more visually engaging.
- Look into adding sound effects.
- Game login with facebook account. To play against your friends
- ~~Larger grid sizes will have different rules to win, instead of requiring to win an entire row or column, 3 or 4 in a row will win them the game.~~ Completed
