import React, { useEffect, useState } from "react";
import movieTrailer from "movie-trailer";
import Grow from "@material-ui/core/Grow";
import ModalVideo from "react-modal-video";
import axios from "./axios";
import "./row.css";
import "./modalvideo.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  // console.log("demo " + fetchUrl);
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [playing, setPlaying] = useState(false);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

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

  console.log(fetchUrl);

  return (
    <div className="row">
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
      <div className="title">
        <h2>{title}</h2>
      </div>

      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <div className="list__item">
                <img
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                  key={movie.id}
                  onClick={() => handleClick(movie)}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
                <div className="list__itemTitle">
                  {movie?.title || movie?.name || movie?.original_name}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Row;
