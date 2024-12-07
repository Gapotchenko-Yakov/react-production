import { useState } from "react";
import "./Counter.scss";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const decrement = () => setCounter(counter - 1);
  const increment = () => setCounter(counter + 1);

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={decrement} className="button">
        DEC
      </button>
      <button onClick={increment} className="button">
        INC
      </button>
    </div>
  );
};

export default Counter;
