import Box from "./Box";
import { useState } from "react";

const Board = () => {
  //Winning conditions
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

    console.log(whoWon);

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
    setNextPlayer((prev) => !prev);
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

  console.log(scores);

  return (
    <div className="board">
      {board.map((value, ind) => (
        <Box key={ind} value={value} onCklickFunc={() => handleClick(ind)} />
      ))}
    </div>
  );
};

export default Board;

//function for empty Board
function EmptyBoard() {
  return Array(9).fill(null);
}
