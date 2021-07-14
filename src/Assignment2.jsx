import React, { useState } from "react";

const Assignment2 = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter((prev) => (prev < 25 ? prev + 1 : prev));
  };
  return (
    <div className="counter">
      <div>
        <div className="topic">counter</div>
        <div className="count">{counter}</div>
        <button onClick={handleClick}>Increement</button>
      </div>
    </div>
  );
};

export default Assignment2;
