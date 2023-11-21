import React from "react";
import { BannerInfo, StyledLink, GlobalStyle } from "./Header.style";
import { useNavigate } from "react-router-dom";
import LoginControl from "./LoginControl";

export default function Header() {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 가져옴

  const handleImageClick = () => {
    // Home 페이지로 이동
    navigate("/Home"); // navigate 함수를 사용하여 Home 페이지로 이동
  };

  return (
    <BannerInfo>
      <GlobalStyle />
      <img
        className="logo"
        style={{
          width: "154px",
          height: "20px",
          marginRight: "30px",
          marginLeft: "180px",
          cursor: "pointer",
        }}
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
        alt="로고"
        onClick={handleImageClick}
      />
      <StyledLink to="/Movies">영화</StyledLink>
      <StyledLink to="/TV">TV프로그램</StyledLink>
      <StyledLink to="/Celebrity">인물</StyledLink>
      <LoginControl />
    </BannerInfo>
  );
}
