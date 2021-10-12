import { useState, useEffect } from "react";
/* Hook que se encarga de hacer la petición Fetch a la API correspondiente y retorna 
un State con la data de la petición, el error y loading. */
const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setState({
          loading: false,
          error: null,
          data,
        });
      });
  }, [url]);
  return state;
};

export default useFetch;
