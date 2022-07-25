import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Row.scss";

function Row({ title, fetchUrl, isPoster }) {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__image">
        {movies.map((movie) => (
          <div key={movie.id}>
            <Link to={`/video/${movie?.id}`}>
              {isPoster ? (
                <img
                  src={`${baseUrl}/${movie.poster_path}`}
                  className="row__image"
                  alt={movie?.title || movie?.original_title || movie?.name}
                />
              ) : (
                <img
                  src={`${baseUrl}/${movie.backdrop_path}`}
                  className="row__image"
                  alt={movie?.title || movie?.original_title || movie?.name}
                />
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
