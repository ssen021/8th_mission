import React from "react";
import Tv from "../components/Tv";
import tvs from "../tvDummy";
import { MovieListContainer } from "./Movies.style";

export default function TVs() {
  return (
    <div>
      <MovieListContainer>
        {tvs.results.map((tv) => (
          <Tv
            key={tv.id}
            title={tv.name}
            poster={tv.poster_path}
            voteAverage={tv.vote_average}
            overview={tv.overview}
          />
        ))}
      </MovieListContainer>
    </div>
  );
}
