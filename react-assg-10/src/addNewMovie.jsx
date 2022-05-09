import React, { useState } from "react";
import movieDetails, { addMovie } from "./movieData";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, FormGroup } from "react-bootstrap";

function AddMovie() {
  const [movieName, setMovieName] = useState("");
  const [leadActor, setLeadActor] = useState("");
  const [leadActree, setLeadActree] = useState("");
  const [releaseYear, setReleaseYear] = useState(1);
  const [language, setLanguage] = useState("");
  const [collection, setCollection] = useState("");

  let history = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault(); // Prevent reload
    console.log("inside submit", movieName, leadActor);
    addMovie(
      movieName,
      leadActor,
      leadActree,
      releaseYear,
      language,
      collection
    );
    console.log("after inserting---", movieDetails);
    // Redirecting to home page after creation done
    history("/");
  };

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Control
            onChange={(e) => setMovieName(e.target.value)}
            type="text"
            placeholder="Enter Movie Name"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            onChange={(e) => setLeadActor(e.target.value)}
            type="text"
            placeholder="Lead Actor"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            onChange={(e) => setLeadActree(e.target.value)}
            type="text"
            placeholder="Lead Actree"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            onChange={(e) => setReleaseYear(e.target.value)}
            type="text"
            placeholder="Release Year"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            onChange={(e) => setLanguage(e.target.value)}
            type="text"
            placeholder="Language"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            onChange={(e) => setCollection(e.target.value)}
            type="text"
            placeholder="Collection"
            required
          />
        </Form.Group>

        <Button
          onClick={(e) => handelSubmit(e)}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>

        {/* Redirecting back to home page */}
        <Link to="/">
          <Button>Home</Button>
        </Link>
      </Form>
    </div>
  );
}

export default AddMovie;
