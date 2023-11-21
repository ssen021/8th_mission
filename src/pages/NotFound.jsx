import React from "react";
import { useNavigate } from "react-router-dom";
import { NotFoundInfo } from "./Movies.style";

export default function NotFound() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/Home");
  };
  return (
    <NotFoundInfo>
      <h2>해당 페이지를 찾지 못했습니다.</h2>
      <p>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</p>
      <button onClick={handleHome}>메인 페이지로 이동</button>
    </NotFoundInfo>
  );
}
