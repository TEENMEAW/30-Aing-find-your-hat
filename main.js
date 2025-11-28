"use strict";
import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });

// Board tiles
const PLAYER = "*";
const EMPTY = "░";
const HOLE = "O";
const HAT = "^";

// Hardcoded board
let board = [
	[PLAYER, EMPTY, HOLE],
	[EMPTY, HOLE, EMPTY],
	[EMPTY, HAT, EMPTY],
];

// Game state
let playerRow = 0;
let playerCol = 0;
let playing = true;


// Print board
function printBoard(board) {
	console.clear(); // call console.clear() before print each move
	board.forEach((row) => {
		console.log(row.join(" "));
	});
}

function movePlayer(direction) {
  // ลบ player ปัจจุบัน
  board[playerRow][playerCol] = EMPTY;

  // move player
  if (direction === "w") playerRow--;
  else if (direction === "s") playerRow++;
  else if (direction === "a") playerCol--;
  else if (direction === "d") playerCol++;

  // Check boundaries
  if (
	playerRow < 0 || playerRow >= board.length ||
	playerCol < 0 || playerCol >= board[0].length
  ) {
	console.log("Out of bounds! Stupid! Did you look at the board? huh, idiot!");
	playing = false;
	return;
  }

  // Check tile
  const tile = board[playerRow][playerCol];
  if (tile === HOLE) {
	console.log("You fell into a hole! God didn't give eyes to you huh? Game over...");
	playing = false;
  } else if (tile === HAT) {
	console.log("You found the hat! Congrast You lose! 🎉 you will lose any way cuz I'm a GM here!");
	playing = false;
  } else {
	board[playerRow][playerCol] = PLAYER;
  }
}



// Game play loop
while (playing) {
	printBoard(board);
	const input = prompt("Which way? (w/a/s/d): ").toLowerCase();

	if (!["w", "a", "s", "d"].includes(input)) {
	  console.log("Idiot. Use w/a/s/d only.");
	  continue;
	}

  movePlayer(input);
}

console.log("Thanks for playing!");