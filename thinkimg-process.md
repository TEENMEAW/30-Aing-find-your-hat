# Thinking Process Guidelines

## Table of Contents

- [Thinking Process Guidelines](#thinking-process-guidelines)
  - [Table of Contents](#table-of-contents)
  - [1. Workflow Planning](#1-workflow-planning)
  - [2.1. Board Functions (Hardcoded)](#21-board-functions-hardcoded)
  - [2.2. Board Functions (Generated)](#22-board-functions-generated)
  - [3. Input Functions](#3-input-functions)
  - [4. Movement Functions](#4-movement-functions)
  - [5. Game Rule Functions](#5-game-rule-functions)
  - [6. Game Play Loop](#6-game-play-loop)
- [WRITE YOUR THINKING PROCESS BELOW. ](#write-your-thinking-process-below)

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">1. Workflow Planning</span>

↳ Draw a flowchart or write steps describing:

<p style="display: flex; align-items: center; gap: 1rem;">
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Game start</span>
<span style="color: wheat; font-weight:bold; font-size:2rem; ">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Read input</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Update position</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Check rules</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">End/Continue</span>
</p>

↳ Must include:

- Input/output of each function.
- Edge cases (invalid input, boundaries, hole/hat tiles).

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem; margin-top: 1rem; border-buttom: none;">2.1. Board Functions (Hardcoded)</span>

↳ Prints the hardcoded board in terminal.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How the board is represented (2D array).
- Tile types (PLAYER, EMPTY, HOLE, HAT).

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">2.2. Board Functions (Generated)</span>

↳ Creates a random board with player, hat, and holes.
↳ Prints the board in terminal.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How the board is represented (2D array).
- Tile types (PLAYER, EMPTY, HOLE, HAT).
- How random placement avoids overlaps.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">3. Input Functions</span>

↳ Reads and validates user input (w, a, s, d).
↳ Logs invalid input.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- Input/output.
- Edge cases (invalid input, boundaries).
- How player position is updated.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">4. Movement Functions</span>

↳ Updates playerRow / playerCol based on the move.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- Input/output.
- Edge cases (invalid input, boundaries).
- How player position is updated.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">5. Game Rule Functions</span>

↳ Checks for out-of-bounds, falling into a hole, or finding the hat.

<span style="font-weight:bold; color: pink;">&nbsp;Game Rules:&nbsp;</span>

- Wins by finding the hat.
- Loses by landing in a hole.
- Loses by moving outside the board.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How to determine win/loss conditions.
- Handling messages for win/loss conditions.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">6. Game Play Loop</span>

↳ Combine all functions into a playable loop.
↳ Ensure messages appear correctly, board prints at start, and invalid input is handled.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How to determine win/loss conditions.
- Handling messages for win/loss conditions
- How to update the board when the player moves.

---

# <p style="display: flex; align-items: center; gap: 0.5em;"><span style="font-weight:bold; color: white; background-color: lightSeaGreen; padding: 0.5rem 2rem;">WRITE YOUR THINKING PROCESS BELOW.</span><span style="font-weight:bold; color: white; background-color: lightSeaGreen; padding: 0.5rem 0;">&nbsp;</span></p>

<!-- Thinking Process -->

<!-- 1. Workflow Planning -->
Game Structure
1.Print board to display board in the map
-> function printBoard(board){.......}

2.Move player to update player's position
-> function movePlayer(direction) { ... }

3.Checking status player win or lose
-> function checkGameStatus() { ... }

4.Input accept player's order
-> const input = prompt("Which way? ");

5.Game loop
-> while(playing):
    printBoard()
    input = getPlayerInput()
    movePlayer(input)
    checkGameStatus()

<!-- 2.1. Board Functions (Hardcoded) -->

👉🏼 We want to to print a board while game start and during the game
🎯 1. --So, first of all we need to create a function call printBoard,
          and we also have a board that the task gave us
          so let put board as a params in the function as wel.
          ✒️ function printBoard(board) {}
🎯 2. -- Second console.clear(); to clear the board first
          ✒️ function printBoard(board) {
	        console.clear(); // call console.clear() before print each move}
🎯 3. -- Third use forEach & join to loop the board and join the board
          ✒️function printBoard(board) {
            console.clear(); // call console.clear() before print each move
            board.forEach((row) => {
              console.log(row.join(" "));
            });
          }
<!-- 3. Input Functions -->
👉🏼 We want player to type a w, a, s, d to find where the has is? so let's create function and check       that   player only type ["w", "a", "s", "d"] by using .includes
🎯 1.--create function
          ✒️ if (!["w", "a", "s", "d"].includes(input)) {}
🎯 2.--let log if usr don't type ["w", "a", "s", "d"]
          ✒️  console.log("Invalid input. Use w/a/s/d only.");
	  continue;
🎯 3.-- all together
          ✒️if (!["w", "a", "s", "d"].includes(input)) {
	  console.log("Invalid input. Use w/a/s/d only.");
	  continue;
	}
<!-- 4. Movement Functions -->
👉🏼 Let's create Movement Functions set params as a direction, clear board and set the movement using if-else statements
🎯 1.-- Let's create Movement Functions set params as a direction and clear board 
        ✒️function movePlayer(direction) {
          board[playerRow][playerCol] = EMPTY;}
🎯 2.--set the movement using if-else statements
        ✒️if (direction === "w") playerRow--;
          else if (direction === "s") playerRow++;
          else if (direction === "a") playerCol--;
          else if (direction === "d") playerCol++;
🎯 3.-- All together
        ✒️function movePlayer(direction) {
          // ลบ player ปัจจุบัน
          board[playerRow][playerCol] = EMPTY;

          // move player
          if (direction === "w") playerRow--;
          else if (direction === "s") playerRow++;
          else if (direction === "a") playerCol--;
          else if (direction === "d") playerCol++;
<!-- 5. Game Rule Functions -->
👉🏼 We have a board so we have a limited space to move what if player moving out of the board, so we need to write if-else statements to check the player's movement.
🎯 1.-- // Check boundaries
            if (
            playerRow < 0 || playerRow >= board.length ||
            playerCol < 0 || playerCol >= board[0].length
            ) {
            console.log("Out of bounds! You lose!");
            playing = false;
            return;
            }

👉🏼 Then let's if user move and find a HOLE or a Hat
🎯 2.--  // Check tile
        const tile = board[playerRow][playerCol];
        if (tile === HOLE) {
        console.log("You fell into a hole! Game over...");
        playing = false;
        } else if (tile === HAT) {
        console.log("You found the hat! You win! 🎉");
        playing = false;
        } else {
        board[playerRow][playerCol] = PLAYER;
        }
      }
🎯 3.-- All together
        // Check boundaries
          if (
          playerRow < 0 || playerRow >= board.length ||
          playerCol < 0 || playerCol >= board[0].length
          ) {
          console.log("Out of bounds! You lose!");
          playing = false;
          return;
          }

          // Check tile
          const tile = board[playerRow][playerCol];
          if (tile === HOLE) {
          console.log("You fell into a hole! Game over...");
          playing = false;
          } else if (tile === HAT) {
          console.log("You found the hat! You win! 🎉");
          playing = false;
          } else {
          board[playerRow][playerCol] = PLAYER;
          }


<!-- 6. Game Play Loop -->
👉🏼Now we have reached to the last section, the section we want to build a  Game Play Loop, using While
          🎯 1.-- We want the board to display Board
                ✒️while (playing) {
                        printBoard(board);
                        const input = prompt("Which way? (w/a/s/d): ").toLowerCase();}
          🎯 2.-- Let's add input in the code
                ✒️ while (playing) {
                        printBoard(board);
                        const input = prompt("Which way? (w/a/s/d): ").toLowerCase();

                        if (!["w", "a", "s", "d"].includes(input)) {
                          console.log("Invalid input. Use w/a/s/d only.");
                          continue;
                        }

                        movePlayer(input);
                      }
          🎯 3.-- All Together
                ✒️// Game play loop
                      while (playing) {
                        printBoard(board);
                        const input = prompt("Which way? (w/a/s/d): ").toLowerCase();

                        if (!["w", "a", "s", "d"].includes(input)) {
                          console.log("Invalid input. Use w/a/s/d only.");
                          continue;
                        }

                        movePlayer(input);
                      }

                      console.log("Thanks for playing!");

                      [Back to Table of Contents](#table-of-contents)

                      ---
