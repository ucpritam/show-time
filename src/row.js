import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import axios from "./axios";
import "./row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  // console.log("demo " + fetchUrl);
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
      if(trailerUrl) {
        setTrailerUrl('');
      } else {
        movieTrailer(movie?.title || "") 
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        }).catch((error) => console.log(error));
      }
  }

  console.log(fetchUrl);
  // console.log(base_url)

  return (
    <div className="row">
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
                <div className="list__itemTitle">{movie?.title || movie?.name || movie?.original_name}</div>

              </div>
            )
        )}
      </div>
      <div className="trailer">
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
      </div>

    </div>
  );
}

export default Row;
