import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import "./banner.css";
import axios from "./axios";
import requests from "./requests";

function Banner() {
  const [movie, setMovie] = useState([]);

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

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <div className="app__featured">
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
            <button className="banner__button">
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
