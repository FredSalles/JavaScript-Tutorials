# TicTacToe

This project is a classic TicTacToe game that can be played right away with a friend. Visual design is entirely based on CSS styling and animations (Transform, Transition). Each empty board square <div> registers a onclick() function that will alternatively trigger crosses and circles placement animation on the board. The index.html only contains one initial board, the board squares are all dynamically inserted into the DOM when the load() function is called.

In this version, the game ends when all squares have been filled, trigering a board cleanup animation cleanup() function. There is no game state maintained other than a counter count to stop the game when all nine squares have been filled. The entire game logic is click-events driven, see onclick(source) function.

One feature this game lacks off is the ability to detect that one of the players won (completed a vertical, horizontal or diagonal line of only circles or crosses).

This tutorial provides step-by-step instructions to remix the project, for the purpose of making the game smart enough to detect when one player won. To achieve this, two enhancements need to be made:

The current game state, or model, needs to be maintained, so as to track where on the board crosses and circles get placed.
An algoritm must be implemented to analyse the game model after each move, so as to detect whether a player won.
