import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { DetailInfo, DetailPoster } from "./Movies.style";

const MovieDetail = () => {
  const { title } = useParams();
  const { state } = useLocation();
  console.log(title);
  console.log(state);

  return (
    <DetailInfo>
      <DetailPoster
        src={`https://image.tmdb.org/t/p/w1280/${state.poster}`}
        alt={state.title}
      />
      <p>{title}</p>
    </DetailInfo>
  );
};

export default MovieDetail;
