import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./banner.css";
import axios from "./axios";
import requests from "./requests";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

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

  // console.log(movie);

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    // if(trailerUrl) {
    //   setTrailerUrl('');
    // } else {
    //   movieTrailer(movie?.title || "") 
    //   .then(url => {
    //     const urlParams = new URLSearchParams(new URL(url).search);
    //     setTrailerUrl(urlParams.get('v'));
    //   }).catch((error) => console.log(error));
    // }
    setTrailerUrl("TcMBFSGVi1c");
}

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
            <button className="banner__button" onClick={() => handleClick(movie)}>
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


      <div className="trailer">
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
      </div>
    </div>
  );
}
export default Banner;
