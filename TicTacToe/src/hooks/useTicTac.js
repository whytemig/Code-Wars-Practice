import { useState } from "react";

//Array of nine items - initial board
const intitialBoard = () => Array(9).fill(null);

const useTicTac = () => {
  //initial value of the board is [null]*9
  const [board, setBoard] = useState(intitialBoard());
  const [next, setNext] = useState(true);

  //winning pattern
  const WINNING_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //calculate winner
  function calculateWinner(currentBoard) {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const [a, b, c] = WINNING_PATTERNS[i];

      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  }

  //handle click func.
  function handleClick(index) {
    //get the winner
    const winner = calculateWinner(board);

    //click on the cell column again return nothing
    if (board[index] || winner) return;

    //make a copy
    const newBoard = [...board];

    newBoard[index] = next ? "X" : "O";

    setBoard(newBoard);
    setNext(!next);
  }

  //status message
  function statusMessage() {
    const winner = calculateWinner(board);
    if (winner) {
      return `Player ${winner} won!`;
    }
    if (!board.includes(null)) {
      return "DRAW!!";
    }
    return `Player ${next ? "X" : "O"} turn `;
  }

  //reset game
  function resetGame() {
    setBoard(intitialBoard());
    setNext(true);
  }

  return { board, handleClick, statusMessage, resetGame };
};

export default useTicTac;
