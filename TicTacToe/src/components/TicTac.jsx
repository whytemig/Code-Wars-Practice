import useTicTac from "../hooks/useTicTac";

function TicTac() {
  const { board, handleClick, statusMessage, resetGame } = useTicTac();
  return (
    <div className="game">
      <div className="status">
        {statusMessage()}
        <button className="reset" onClick={resetGame}>
          Reset Game
        </button>
        <div className="board">
          {board.map((item, indx) => (
            <button
              key={indx}
              className="cell"
              onClick={() => handleClick(indx)}
              disabled={item !== null}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TicTac;
