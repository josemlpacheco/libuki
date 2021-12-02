import "./BookCard.css";
import React from "react";
import { FcReading } from "react-icons/fc";

export const BookCard = () => {
  return (
    <div className="bookcard">
      <div className="title">
        <p>Despertando al gigante interior</p>
      </div>
      <div className="progress">
        <p>20%</p>
      </div>
      <div className="read-icon">
        <a href="/lecture">
          <FcReading size={40} />
        </a>
      </div>
    </div>
  );
};
