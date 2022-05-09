import React from "react";
import movieDetails from "./movieData";
import Header from "./Header";
import App from "./App";
import MovieByID from "./movieByID";
import AddMovie from "./addNewMovie";
import { ErrorBoundary } from "./ErrorBoundary";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Link,
} from "react-router-dom";

function Main() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App />}></Route>

          <Route
            path="/:id"
            element={
              <ErrorBoundary>
                <MovieByID />
              </ErrorBoundary>
            }
          ></Route>
          <Route path="/AddMovie" element={<AddMovie />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Main;
