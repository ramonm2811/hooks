import React from "react";
import ReactDOM from "react-dom";
import SimpleForm from "./components/02-useEffect/SimpleForm";
import CounterApp from "./components/CounterApp";
import CounterWithCustomHook from "./components/CounterWithCustomHook";
import HooksApp from "./HooksApp";

const App = () => {
  return (
    <>
      <SimpleForm />
    </>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
