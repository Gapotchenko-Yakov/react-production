import { useState } from "react";
import classes from "./Counter.module.scss";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const decrement = () => setCounter(counter - 1);
  const increment = () => setCounter(counter + 1);

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={decrement} className={classes.button}>
        DEC
      </button>
      <button onClick={increment} className={classes.button}>
        INC
      </button>
    </div>
  );
};

export default Counter;
