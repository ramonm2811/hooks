import React from "react";
import { useCounter } from "../hooks/useCounter";
import "./counter.css";

const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(20);
  return (
    <>
      <h1>Counter with Hooks: {state}</h1>
      <hr />
      <button onClick={increment} className="btn btn-primary m-2">
        +1
      </button>
      <button onClick={reset} className="btn btn-primary m-2">
        Reset
      </button>
      <button onClick={decrement} className="btn btn-primary m-2">
        -1
      </button>
    </>
  );
};

export default CounterWithCustomHook;
