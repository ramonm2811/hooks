import React from "react";
import ReactDOM from "react-dom";
import CounterApp from "./components/CounterApp";
import HooksApp from "./HooksApp";

const App = () => {
  return (
    <>
      <CounterApp />
    </>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
