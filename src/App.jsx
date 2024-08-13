import styled from "styled-components";
import { useTimer } from "./hooks/useTimer";
import { useState } from "react";

function App() {
  const [timerValue, setTimerValue] = useState("");
  const {
    counter,
    startCounter,
    stopCounter,
    restartCounter,
    setCounterValue,
  } = useTimer(timerValue);

  const timerValueHandler = (e) => {
    setTimerValue(e.target.value);
    setCounterValue(e.target.value);
  };
  return (
    <StyledDiv>
      <input type="text" onChange={timerValueHandler} value={timerValue} />
      <h1> counter:{counter} </h1>
      <button onClick={startCounter}>start</button>
      <button onClick={stopCounter}>stop</button>
      <button onClick={restartCounter}>restart</button>
    </StyledDiv>
  );
}

export default App;

const StyledDiv = styled.div`
  background: #f44949;
  color: #141111;
  padding: 10px;
`;
