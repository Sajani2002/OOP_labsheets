import React, {useState,useEffect} from 'react';

function Timer() {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
      let timer;
      if (isRunning){
        timer = setInterval(() => {
          setCount(prevCount => prevCount + 1);
        }, 1000);
      }
      return () => clearInterval(timer);
    },[isRunning]);

    const stopTimer = () => {
      setIsRunning(false);
    };

    return (
      <div>
        <h2>Timer: {count}s</h2>
        <button onClick={stopTimer}>Stop</button>
      </div>
    );
}

export default Timer;