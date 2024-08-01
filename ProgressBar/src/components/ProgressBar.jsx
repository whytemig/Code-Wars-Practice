export default function ProgressBar({ value }) {
  function Percentage(value) {
    return Math.min(Math.max(0, value), 100);
  }

  return (
    <div
      className="progressbar-container"
      style={{
        color: `${value >= 50 ? "#fff" : ""}`,
      }}
    >
      {Percentage(value)}%
      <span className="green-bckground" style={{ width: `${value}%` }}></span>
    </div>
  );
}
