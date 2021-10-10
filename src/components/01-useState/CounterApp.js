import React, { useState } from "react";
import "./counter.css";

const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
  });

  const { counter1, counter2 } = counter; //Desestructuramos el state counter
  return (
    <div>
      <h1>Counter1 {counter1}</h1>
      <h1>Counter2 {counter2}</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => {
          setCounter({
            ...counter, //Utilizamos el Spread operator para obtener todos los valores del objeto y luego solo modificamos el que necesitemos.
            counter1: counter1 + 1,
          });
          console.log(counter1, counter2);
        }}
      >
        {" "}
        +1
      </button>
    </div>
  );
};

export default CounterApp;
