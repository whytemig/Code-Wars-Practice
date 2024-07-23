import { useEffect, useState } from "react";
import "./Timer.css";

export default function Timer() {
  const [time, setTime] = useState({
    hour: 0,
    minute: 0,
    seconds: 0,
    mill: 0,
  });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => {
          if (prev.mill > 0) {
            return { ...prev, mill: prev.mill - 1 };
          } else if (prev.seconds > 0) {
            return { ...prev, seconds: prev.seconds - 1, mill: 99 };
          } else if (prev.minute > 0) {
            return { ...prev, minute: prev.minute - 1, seconds: 59, mill: 99 };
          } else if (prev.hour > 0) {
            return {
              ...prev,
              hour: prev.hour - 1,
              minute: 59,
              seconds: 59,
              mill: 99,
            };
          }
          return prev; // Return previous state if no update is needed
        });
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  // on click function
  function handleTimeStart() {
    if (
      !time.hour !== 0 ||
      !time.minute !== 0 ||
      !time.seconds !== 0 ||
      !time.mill !== 0
    ) {
      setIsRunning(true);
    }
  }

  function handleTimePause() {
    setIsRunning(false);
  }

  function handleTimeStop() {
    setIsRunning(false);
    setTime({ hour: 0, minute: 0, seconds: 0, mill: 0 });
  }

  // validate proper time
  function validateTimeInput(type, value) {
    let newTimeValue = parseInt(value, 10);
    if (isNaN(newTimeValue) || newTimeValue < 0) {
      newTimeValue = 0;
    }

    if (type === "hour") {
      newTimeValue = Math.min(newTimeValue, 23);
    } else if (type === "minute" || type === "seconds") {
      newTimeValue = Math.min(newTimeValue, 59);
    }
    return newTimeValue;
  }

  //double digit value
  function formatTimeValue(value) {
    return value.toString().padStart(2, "0");
  }

  return (
    <div className="container">
      <div className="container_labels">
        <p className="label">Hours</p>
        <p className="label">Minutes</p>
        <p className="label">Seconds</p>
        <p className="label">Milliseconds</p>
      </div>

      {/* inputs  */}

      <div className="inputs">
        <input
          type="number"
          placeholder="00"
          className="input-time"
          maxLength={2}
          value={formatTimeValue(time.hour)}
          onChange={(e) =>
            setTime((prev) => ({
              ...prev,
              hour: validateTimeInput("hour", e.target.value),
            }))
          }
        />
        <p className="colons">:</p>
        <input
          type="number"
          placeholder="00"
          className="input-time"
          maxLength={2}
          value={formatTimeValue(time.minute)}
          onChange={(e) =>
            setTime((prev) => ({
              ...prev,
              minute: validateTimeInput("minute", e.target.value),
            }))
          }
        />
        <p className="colons">:</p>
        <input
          type="number"
          placeholder="00"
          className="input-time"
          maxLength={2}
          value={formatTimeValue(time.seconds)}
          onChange={(e) =>
            setTime((prev) => ({
              ...prev,
              seconds: validateTimeInput("seconds", e.target.value),
            }))
          }
        />
        <p className="colons">:</p>
        <input
          type="number"
          placeholder="00"
          className="input-time"
          maxLength={2}
          value={formatTimeValue(time.mill)}
        />
      </div>
      <button onClick={handleTimeStart}>Start</button>
      <button onClick={handleTimePause}>Pause</button>
      <button onClick={handleTimeStop}>Stop</button>
    </div>
  );
}
