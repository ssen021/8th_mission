import React from "react";
import {
  StyledMovie,
  MovieImage,
  MovieDescription,
  MovieInfo,
} from "./Movie.style";
import { useNavigate } from "react-router-dom";

function Movie(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    // 클릭한 영화의 title을 사용하여 MovieDetail 페이지로 이동
    navigate(`/movie/${props.title}`, {
      state: props,
    });
  };

  return (
    <StyledMovie onClick={handleClick}>
      <MovieImage
        src={`https://image.tmdb.org/t/p/w1280/${props.poster}`}
        alt={props.title}
      />
      <MovieDescription>
        <div className="movie-description-title">{props.title}</div>
        <p>{props.overview}</p>
      </MovieDescription>
      <MovieInfo>
        <div className="movie-title">{props.title}</div>
        <div className="movie-rating">{props.voteAverage}</div>
      </MovieInfo>
    </StyledMovie>
  );
}

export default Movie;
