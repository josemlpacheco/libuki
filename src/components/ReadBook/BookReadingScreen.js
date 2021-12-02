import "./BookReadingScreen.css";
import React from "react";

export const BookReadingScreen = () => {
  return (
    <>
      <h1>Book Reading Screen</h1>
      <div className="timelapse">
        <div className="titles">
          <div>HR</div>
          <div>MIN</div>
          <div>SEC</div>
        </div>
        <div className="time">
          <div>00:</div>
          <div>00:</div>
          <div>00</div>
        </div>
      </div>
      <div className="select-buttons">
        <button>Iniciar</button>
        <button>Pausar</button>
        <button>Terminar</button>
      </div>
      <div className="add-page">
        <button>+1</button>
      </div>
      <div className="notes">
        <button>Agregar nota</button>
      </div>
    </>
  );
};
