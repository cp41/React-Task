import React, { useRef, useState } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startStop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setLaps([]);
    setIsRunning(false);
  };

  const addLap = () => {
    setLaps([...laps, time]);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, 0)}:${secs
      .toString()
      .padStart(2, 0)}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Stopwatch</h1>
      <h2>{formatTime(time)}</h2>
      <button onClick={startStop}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={addLap} disabled={!isRunning}>
        Lap
      </button>
      <button onClick={reset}>Reset</button>

      <h3>Laps</h3>
      <ul>
        {laps.map((lap, index) => {
          return (
            <div key={index}>
              Lap {index + 1}: {lap}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Stopwatch;