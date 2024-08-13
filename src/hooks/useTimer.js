import { useEffect, useState, useRef, useCallback } from "react";

export const useTimer = () => {
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef(null);

  const startCounter = useCallback(() => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setCounter((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          return 0;
        }
        return prevCount - 1;
      });
    }, 500);
  }, []);

  const stopCounter = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const restartCounter = useCallback(() => {
    clearInterval(intervalRef);
    stopCounter();
    setCounter(0);
  }, [stopCounter, startCounter]);

  const setCounterValue = (time) => {
    setCounter(time * 60);
  };

  useEffect(() => {
    return () => {
      stopCounter();
    };
  }, [stopCounter]);

  return {
    counter,
    startCounter,
    stopCounter,
    restartCounter,
    setCounterValue,
  };
};
