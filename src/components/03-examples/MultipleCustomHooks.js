import React from "react";
import useFetch from "../../hooks/useFetch";
import "../02-useEffect/effect.css";

const MultipleCustomHooks = () => {
  const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
  const { loading, data } = state;
  // console.log(data[0].quote);
  console.log();
  return (
    <div>
      <h1>Custom Hooks</h1>
      <hr />
      {loading ? (
        <div className="alert alert-primary text-center" role="alert">
          Loading
        </div>
      ) : (
        <blockquote className="text-end">
          Message
          <footer>-Ramon</footer>
        </blockquote>
      )}
    </div>
  );
};

export default MultipleCustomHooks;
