import React from "react";
import ReactDOM from "react-dom";
import SimpleForm from "./components/02-useEffect/SimpleForm";
import CounterApp from "./components/01-useState/CounterApp";
import CounterWithCustomHook from "./components/01-useState/CounterWithCustomHook";
import HooksApp from "./HooksApp";
import FormWithCustomHook from "./components/02-useEffect/FormWithCustomHooks";
import MultipleCustomHooks from "./components/03-examples/MultipleCustomHooks";

const App = () => {
  return (
    <>
      <MultipleCustomHooks />
    </>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
