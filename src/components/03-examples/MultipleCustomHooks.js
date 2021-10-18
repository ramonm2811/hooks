import React from "react";
import useFetch from "../../hooks/useFetch";
import "../02-useEffect/effect.css";

const MultipleCustomHooks = () => {
  const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
  const { loading, data } = state;
  //Se hace esta validación debido que al principio data == null, eso hace que data[0] sea igual a null[0], generando un error.
  if (data !== null) {
    const { author, quote } = data[0];
  }

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      {loading ? (
        <div className="alert alert-primary text-center" role="alert">
          Loading...
        </div>
      ) : (
        <blockquote className="text-end">
          {quote}
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}
    </div>
  );
};

export default MultipleCustomHooks;
