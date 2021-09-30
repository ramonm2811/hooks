import React from "react";
import ReactDOM from "react-dom";
import HooksApp from "./HooksApp";

const App = () => {
  return (
    <>
      <HooksApp />
    </>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
