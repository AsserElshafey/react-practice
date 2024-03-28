import React, { useState, useEffect, useRef } from "react";

function StopWatch() {

  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdREf = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {

  }, [isRunning])

  function start() {

  }

  function stop() {

  }

  function reset() {

  }

  function formatTime() {
    return `00:00:00`
  }


  return (
    <div className="stopwatch">
      <div className="display">
        {formatTime()}
      </div>
      <div className="controls">
        <button className="start-button" onClick={start}>Start</button>
        <button className="stop-button" onClick={stop}>Stop</button>
        <button className="reset-button" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default StopWatch 