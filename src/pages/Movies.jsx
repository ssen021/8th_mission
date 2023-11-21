import React from "react";
import Movie from "../components/Movie"; // Movie 컴포넌트를 import합니다.
import movies from "../movieDummy";
import { MovieListContainer } from "./Movies.style";

const Movies = () => {
  return (
    <div>
      <MovieListContainer>
        {movies.results.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            voteAverage={movie.vote_average}
            overview={movie.overview}
          />
        ))}
      </MovieListContainer>
    </div>
  );
};

export default Movies;
