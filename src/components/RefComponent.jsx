import React, { useRef, useState } from "react";

const RefComponent = () => {
  const [stateNumber, setStateNumber] = useState(0);
  const numRef = useRef(0);
  const x = { lol: "hi" };
  const xRef = useRef(x);

  function incrementAndDelayLogging() {
    setStateNumber(stateNumber + 1);
    numRef.current++;
    setTimeout(() => {
      alert(`stateNumber: ${stateNumber} | numRef: ${numRef.current}`);
    }, 1000);
  }
  return (
    <div>
      <button onClick={incrementAndDelayLogging}>Delay logging</button>
      <h4>state: {stateNumber}</h4>
      <h4>numRef:{numRef.current}</h4>
    </div>
  );
};

export default RefComponent;
