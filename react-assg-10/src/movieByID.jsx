import React from "react";
import { useParams } from "react-router-dom";
import { findMovieByID } from "./movieData";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//import { ErrorBoundary } from "react-error-boundary";
//import { ErrorBoundary } from "./ErrorBoundary";
//Find movie by id and show

function MovieByID() {
  console.log("inside movieByID");
  const { id } = useParams();
  console.log("params-", { id }); //key-value : id-id

  const movie = findMovieByID(Number(id));

  // if (movie === undefined) {
  //   alert("obj is undefined");
  // }

  console.log("line 16 from movieByID", movie);

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
          <tr className="tr">
            <td>{movie.movieID}</td>
            <td>{movie.movieName}</td>
            <td>{movie.leadActor}</td>
            <td>{movie.leadActree}</td>
            <td>{movie.releaseYear}</td>
            <td>{movie.language}</td>
            <td>{movie.collection}</td>
          </tr>
        </tbody>
      </table>

      <Link to="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
}

export default MovieByID;
