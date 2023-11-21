import React from "react";
import {
  StyledMovie,
  MovieImage,
  MovieDescription,
  MovieInfo,
} from "./Movie.style";

function Tv(props) {
  return (
    <StyledMovie>
      <MovieImage
        src={`https://image.tmdb.org/t/p/w1280/${props.poster}`}
        alt={props.title}
      />
      <MovieDescription>
        <div className="movie-description-title">{props.name}</div>
        <p>{props.overview}</p>
      </MovieDescription>
      <MovieInfo>
        <div className="movie-title">{props.title}</div>
        <div className="movie-rating">{props.voteAverage}</div>
      </MovieInfo>
    </StyledMovie>
  );
}

export default Tv;
