import { useRef, useState, useEffect } from "react";
import ButtonController from "./ButtonController";

export const StopWatch = () => {
  //controller of the stopwatch
  const [isRunning, setisRunning] = useState(false);
  //elaspesTime in millisecond
  const [elaspesTime, setElapseTime] = useState(0);
  //start time refernce
  const startTime = useRef(0);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        // Increment the elapsed time by 10 milliseconds
        // setElapseTime((prev) => prev + 10);
        setElapseTime(Date.now() - startTime.current);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  //start function
  function start() {
    setisRunning(true);
    startTime.current = Date.now() - elaspesTime;
  }
  function stop() {
    setisRunning(false);
  }
  function reset() {
    setElapseTime(0);
    setisRunning(false);
  }

  //time format
  function timeFormat() {
    const milliseconds = Math.floor((elaspesTime % 1000) / 10);
    const totalSeconds = Math.floor(elaspesTime / 1000);
    const seconds = totalSeconds % 60;
    const totalMinute = Math.floor(totalSeconds / 60);
    const minutes = totalMinute % 60;
    const hours = Math.floor(totalMinute / 60);

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds
      .toString()
      .padStart(2, "0")}`;
  }

  return (
    <div className="container">
      <div className="display">{timeFormat()}</div>
      <ButtonController onStart={start} onStop={stop} onReset={reset} />
    </div>
  );
};
