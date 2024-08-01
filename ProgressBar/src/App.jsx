import { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setPercentage((prev) => prev + 1);
    }, 100);
  }, []);

  return (
    <div className="container">
      <h1>Progress Bar</h1>

      <ProgressBar value={percentage} />
    </div>
  );
}

export default App;
