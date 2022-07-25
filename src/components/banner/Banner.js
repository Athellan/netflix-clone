import React from "react";
import { useState, useEffect } from "react";
import "./Banner.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
import requests from "../../config/Requests";
import axios from "axios";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  function shortText(string, n) {
    return string?.length > n
      ? string.substr(0, n - 1) + "..."
      : "No description";
  }

  const bannerStyle = {
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
    backgroundSize: "",
    backgroundPosition: "center center",
  };

  console.log(movie);

  return (
    <header className="banner" style={bannerStyle}>
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.title || movie?.original_title || movie?.name}
        </h1>
        <p className="banner__description">{shortText(movie?.overview, 100)}</p>
        <div className="banner__buttons">
          <button className="banner__button banner__button--play">
            <PlayArrowIcon />
            Lecture
          </button>
          <button className="banner__button ">
            <InfoIcon />
            Plus d'infos
          </button>
        </div>
      </div>
    </header>
  );
}

export default Banner;
