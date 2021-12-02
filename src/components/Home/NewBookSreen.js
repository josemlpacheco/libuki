/* eslint-disable react/jsx-no-target-blank */
import "./NewBookScreen.css";
import React, { Component, useState } from "react";
import axios from "axios";

function NewBookScreen() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyBAx78MqKUGKKg4OzpIQFnYyGou67QbA1k"
  );
  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          book +
          "&key=" +
          apiKey +
          "&maxResults=3"
      )
      .then((data) => {
        console.log(data.data.items);
        setResult(data.data.items);
      });
  }
  return (
    <>
      <h1>Crear un nuevo libro</h1>
      <form onSubmit={handleSubmit}>
        <div className="new-book">
          <div className="info">
            <label htmlFor="">Nombre: </label>
            <input
              type="text"
              onChange=""
              name=""
              id=""
              autoComplete="off"
              onChange={handleChange}
            />
            <div className="booksnew">
              {result.map((book) => (
                <a href={book.volumeInfo.previewLink} target="_blank">
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.title}
                  />
                </a>
              ))}
            </div>
            <label htmlFor="">No. de páginas: </label>
            <input type="number" name="" id="" />
            <label htmlFor="">Autor: </label>
            <input type="text" name="" id="" />
          </div>
          <button type="submit" className="btn">
            Buscar
          </button>
          <a href="/lecture" className="btnr">
            Crear
          </a>
        </div>
      </form>
    </>
  );
}
export default NewBookScreen;
