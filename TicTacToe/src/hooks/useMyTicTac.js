import { useState } from "react";

//My custom Hook for the Tic Tac Game...
const useMyTicTac = () => {
  //function for empty Board
  function EmptyBoard() {
    return Array(9).fill(null);
  }

  //Winning conditions mapped out in an Array. These numbers are the index number of the box square. Numbers 0 to 8, as the numbers are arrange in a way the Xs and Os are arranged.
  const WinningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(EmptyBoard());
  const [nextPlayer, setNextPlayer] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [_, setGameState] = useState(false);

  //handle Click function
  function handleClick(index) {
    if (board[index]) return;
    let newBoard = board.map((value, ind) => {
      if (ind === index) {
        return nextPlayer ? "X" : "O";
      } else {
        return value;
      }
    });

    let whoWon = winner(newBoard);

    if (whoWon === "X") {
      let { xScore } = scores;
      xScore += 1;
      setScores((prev) => ({ ...prev, xScore }));
    } else if (whoWon === "O") {
      let { oScore } = scores;
      oScore += 1;
      setScores((prev) => ({ ...prev, oScore }));
    }

    //update the board
    setBoard(newBoard);
    //current player with a boolean
    setNextPlayer(!nextPlayer);

    whoWon &&
      setTimeout(() => {
        resetGame();
      }, 300);
  }

  //winning function
  function winner(board) {
    for (let index = 0; index < WinningConditions.length; index++) {
      const [a, b, c] = WinningConditions[index];

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
  }

  function resetGame() {
    setBoard(EmptyBoard());
    setGameState(false);
  }

  return { scores, nextPlayer, board, resetGame, handleClick };
};

export default useMyTicTac;
