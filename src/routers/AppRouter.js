import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BookInfoScreen } from "../components/BookInfo/BookInfoScreen";
import { PageReportScreen } from "../components/BookInfo/PageReportScreen";
import HomeScreen from "../components/Home/HomeScreen";
import NewBookSreen from "../components/Home/NewBookSreen";
import { BookReadingScreen } from "../components/ReadBook/BookReadingScreen";
import { ReadingReportScreen } from "../components/ReadBook/ReadingReportScreen";
import { Navbar } from "../components/UI/Navbar";

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/new-book" component={NewBookSreen} />
          <Route exact path="/details" component={BookInfoScreen} />
          <Route exact path="/book" component={PageReportScreen} />
          <Route exact path="/lecture" component={BookReadingScreen} />
          <Route exact path="/summary" component={ReadingReportScreen} />
        </Switch>
      </div>
    </Router>
  );
};
