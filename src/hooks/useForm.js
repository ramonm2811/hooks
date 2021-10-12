import { useState } from "react";

/* Este hook lo que nos permite es manejar el ESTADO ó STATE de cualquier formulario que deseemos crear en nuestra
aplicacion, solo con llamarlo en nuestro componente podemos manejar automaticamente su estado sin importar la cantidad 
de inputs que tenga */

const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: [target.value],
    });
  };

  return [values, handleInputChange];
};

export default useForm;
