import React, { useState, useEffect } from "react";
import "./effect.css";

//Componente funcional para crear un formulario
const FormWithCustomHook = () => {
  //State que maneja los cambios del formulario
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  //desestructuracion del formState
  const { name, email, password } = formState;

  //useEffect para ejecutar un bloque de codigo cuando algo especifico sucede en nuestro componente
  /*  useEffect(() => console.log("hey"), []);

  useEffect(() => console.log("formState cambió name"), [name]);

  useEffect(() => console.log("formState cambió email"), [email]); */

  //función que maneja el onChange de los input
  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState, //Extraemos todos los valores del state con el spread operator
      [target.name]: target.value, //Este codigo nos permite utilizar 1 sola función para todos los input
    });
  };

  return (
    <>
      <h1>Form With Custom Hook</h1>
      <hr />
      <form>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          placeholder="Ramon Muñoz"
          className="form-control my-2"
          autoComplete="off"
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleInputChange}
          placeholder="ramonm2811@gmail.com"
          className="form-control my-2"
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
          placeholder="****"
          className="form-control my-2"
          autoComplete="off"
        />
      </form>
    </>
  );
};

export default FormWithCustomHook;
