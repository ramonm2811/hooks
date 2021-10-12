import React from "react";
import useForm from "../../hooks/useForm";
import "./effect.css";

//Componente funcional para crear un formulario
const FormWithCustomHook = () => {
  //Custom Hook que maneja el state del formulario
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues; //Desestructuración del formValues

  const handleSubmit = (e) => {
    e.prenventDefault();
    let keys = Object.keys(formValues);
    for (let i = 0; i < keys.length; i++) {
      if (formValues.keys[i] !== "") {
        console.log(`Input ${keys[i]} verificado`);
      } else {
        console.log(`Input ${keys[i]} NO verificado`);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form With Custom Hook</h1>
      <hr />
      <div>
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
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormWithCustomHook;
