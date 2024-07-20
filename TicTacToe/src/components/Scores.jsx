export const Scores = ({ scores, whosNext }) => {
  return (
    <div className="scores">
      <div className="score-board">
        <div className={`${whosNext ? "underline" : ""}`}>
          X-Score: {scores.xScore}
        </div>
        <div className={`${whosNext ? "" : "underlineblue"}`}>
          O-Score: {scores.oScore}
        </div>
      </div>
    </div>
  );
};
