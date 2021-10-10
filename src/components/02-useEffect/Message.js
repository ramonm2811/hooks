import React, { useEffect } from "react";

const Message = () => {
  //crearemos un event listener para las coordenadas del mouse
  useEffect(() => {
    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      console.log(coords);
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return (
    <div>
      <h1>Hi Motherfucker</h1>
    </div>
  );
};

export default Message;
