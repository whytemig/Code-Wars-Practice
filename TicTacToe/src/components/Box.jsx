const Box = ({ value, onCklickFunc }) => {
  return (
    <div
      className={`box ${value === "X" ? "xbox" : "obox"}`}
      onClick={onCklickFunc}
    >
      {value}
    </div>
  );
};

export default Box;
