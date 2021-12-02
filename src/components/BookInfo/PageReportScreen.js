import "./PageReportScreen.css";
import React from "react";

export const PageReportScreen = () => {
  return (
    <>
      <h1>Información del libro</h1>
      <div className="book-info">
        <p>
          <span>Libro: </span>Despertando al gigante interior
        </p>
        <p>
          <span>Páginas: </span>720
        </p>
        <p>
          <span>Autor: </span> Tony Robbins
        </p>
        <p>
          <span>Avance: </span> 130/720
        </p>
        <p>
          <span>Tiempo leído: </span> 130 min
        </p>
      </div>
      <div className="btns">
        <a href="/details" className="btnr">
          Estadísticas por hoja
        </a>
        <a href="/details" className="btnr">
          Estadísticas por sesión
        </a>
      </div>
    </>
  );
};
