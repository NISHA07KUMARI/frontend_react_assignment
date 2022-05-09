import React, { useState, useEffect } from "react";
import "./App.css";
import movieDetails, { removeMovie } from "./movieData";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

//Get movie details, Delete movie by id
function App() {
  const [movies, setMovies] = useState(movieDetails);
  let history = useNavigate();
  //rendering the movieDetails on every update of movies on click of delete button
  // useEffect(() => {
  //   setMovies(movieDetails);
  // }, [movies]);
  console.log("inside App-- ", movies);

  return (
    <div>
      <table className="table">
        <thead>
          <tr className="tr">
            <th>Movie ID</th>
            <th>Movie Name</th>
            <th>Lead Actor</th>
            <th>Lead Actress</th>
            <th>Release Year</th>
            <th>Language</th>
            <th>Collection</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => {
            return (
              <tr
                className="tr"
                key={movie.movieID}
                onClick={() => {
                  history(`/${movie.movieID}`);
                }}
              >
                <td>{movie.movieID}</td>
                <td>{movie.movieName}</td>
                <td>{movie.leadActor}</td>
                <td>{movie.leadActree}</td>
                <td>{movie.releaseYear}</td>
                <td>{movie.language}</td>
                <td>{movie.collection}</td>
                <td>
                  <button
                    onClick={(_) => {
                      removeMovie(movie.movieID);
                      setMovies([...movieDetails]); //creating new array on every update
                      console.log({ movieDetails });
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to="/AddMovie">
        <Button>Add New Movie</Button>
      </Link>
    </div>
  );
}

export default App;
