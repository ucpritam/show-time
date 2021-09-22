import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import movieTrailer from "movie-trailer";
import Grow from "@material-ui/core/Grow";
import ModalVideo from "react-modal-video";
import "./banner.css";
import axios from "./axios";
import requests from "./requests";
import "./modalvideo.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  const handleClick = (movie) => {
    setPlaying(true);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => setTrailerUrl("VDzX14PUEO8"));
    }
  };

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <div className="app__featured">
      {trailerUrl && (
        <Grow in={playing} mountOnEnter unmountOnExit>
          <ModalVideo
            channel="youtube"
            isOpen="true"
            videoId={trailerUrl}
            onClose={() => setPlaying(false)}
          />
        </Grow>
      )}
      <header
        className="banner"
        style={{
          backgroundSize: "Cover",
          backgroundImage: `linear-gradient(to left, transparent, #111),url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner__buttons">
            <button
              className="banner__button"
              onClick={() => handleClick(movie)}
            >
              <span className="fa">
                <FaPlay />
              </span>
              {"Play"}
            </button>
          </div>
          <div>
            <h1 className="banner__description">
              {" "}
              {truncate(movie?.overview, 150)}
            </h1>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Banner;
