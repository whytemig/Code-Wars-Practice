const ButtonController = ({ onStart, onStop, onReset }) => {
  return (
    <div className="controls">
      <button className="start-btn" onClick={onStart}>
        Start
      </button>
      <button className="stop-btn" onClick={onStop}>
        Stop
      </button>
      <button className="reset-btn" onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

export default ButtonController;
