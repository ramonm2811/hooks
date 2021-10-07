import React, { useState, useEffect } from "react";
import "./effect.css";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => console.log("hey"), []);

  useEffect(() => console.log("formState cambió name"), [name]);

  useEffect(() => console.log("formState cambió email"), [email]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
    console.log(formState);
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <form>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          placeholder="Ramon Muñoz"
          className="form-control my-2"
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleInputChange}
          placeholder="ramonm2811@gmail.com"
          className="form-control my-2"
        />
      </form>
    </>
  );
};

export default SimpleForm;
