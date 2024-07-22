import Box from "./Box";
import { Scores } from "./Scores";
import Button from "./Button";
import useMyTicTac from "../hooks/useMyTicTac";

const Board = () => {
  const { scores, nextPlayer, board, resetGame, handleClick } = useMyTicTac();
  return (
    <div>
      <Scores scores={scores} whosNext={nextPlayer} />
      <div className="board">
        {board.map((value, ind) => (
          <Box key={ind} value={value} onCklickFunc={() => handleClick(ind)} />
        ))}
        <Button onReset={resetGame} />
      </div>
    </div>
  );
};

export default Board;
