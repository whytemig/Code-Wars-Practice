const Button = ({ onReset }) => {
  return (
    <div className="btn-container">
      <button onClick={onReset} className="button">
        Rest
      </button>
    </div>
  );
};

export default Button;
