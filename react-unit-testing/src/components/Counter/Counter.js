import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  const handleDecrement = () => setCount((count -= 1));
  const handleIncrement = () => setCount((count += 1));

  return (
    <div className="App">
      <h1>Testing React Hooks!</h1>
      <p data-testid="counterTxt">{count}</p>
      <button data-testid="decrementButton" onClick={handleDecrement}>-</button>

      <button data-testid="incrementButton" onClick={handleIncrement}>+</button>
    </div>
  );
}

export default Counter;