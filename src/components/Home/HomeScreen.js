import "./HomeScreen.css";
import React, { Component } from "react";
import { BookCard } from "../UI/Cards/BookCard";

export default class HomeScreen extends Component {
  render() {
    return (
      <div className="home-screen">
        <div className="add-book">
          <a className="add-button" href="/new-book">
            +
          </a>
          <h1>Agregar un nuevo libro</h1>
        </div>
        <div className="books">
          <div id="wrapper">
            <div className="scrollbar" id="style-7">
              <div className="force-overflow">
                <a className href="/book">
                  <BookCard />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
