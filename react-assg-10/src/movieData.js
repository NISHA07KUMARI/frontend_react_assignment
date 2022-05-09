import { ErrorBoundary } from "./ErrorBoundary";
import React from "react";

const movieDetails = [
  {
    movieID: 1,
    movieName: "Chak De India",
    leadActor: "Sharukh Khan",
    leadActree: "",
    releaseYear: 2008,
    language: "Hindi",
    collection: "100CR",
  },
  {
    movieID: 2,
    movieName: "83",
    leadActor: "Ranveer Singh",
    leadActree: "Deepika",
    releaseYear: 2021,
    language: "Hindi",
    collection: "80CR",
  },
  {
    movieID: 3,
    movieName: "M.S. Dhoni",
    leadActor: "Shushant Singh Rajput",
    leadActree: "Disha Patani",
    releaseYear: 2016,
    language: "Hindi",
    collection: "200CR",
  },
];

function removeMovie(movieID) {
  const indexToRemove = movieDetails.findIndex(
    (movie) => movie.movieID === movieID
  );

  movieDetails.splice(indexToRemove, 1);
}

function findMovieByID(movieID) {
  console.log(
    "inside fun to find movie by id",
    movieDetails.find((movie) => movie.movieID === movieID)
  );

  // try {
  //   if (movieDetails.find((movie) => movie.movieID === movieID) === undefined) {
  //     return movieDetails.find((movie) => movie.movieID === 1);
  //   } else return movieDetails.find((movie) => movie.movieID === movieID);
  // } catch (e) {
  //   console.log("froom try catch-");
  // }

  return movieDetails.find((movie) => movie.movieID === movieID);
}

function addMovie(
  movieName,
  leadActor,
  leadActree,
  releaseYear,
  language,
  collection
) {
  console.log("inside addMovie--", movieDetails.length);
  const movieID = movieDetails.length + 1;
  movieDetails.push({
    movieID,
    movieName,
    leadActor,
    leadActree,
    releaseYear,
    language,
    collection,
  });
  console.log("after inserting array len--", movieDetails.length);
}

export default movieDetails;
export { removeMovie, findMovieByID, addMovie };
