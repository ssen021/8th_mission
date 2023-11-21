import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginBox, StyledParagraph, Button } from "./LoginControl.style";

const LoginControl = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
    // 로그인 페이지로 리다이렉트 (필요한 경우 경로를 조정하세요)
    navigate("/login");
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    navigate("/home");
  };

  let button;
  if (isLoggedIn) {
    button = <Button onClick={handleLogoutClick}>로그아웃</Button>;
  } else {
    button = <Button onClick={handleLoginClick}>로그인</Button>;
  }

  return (
    <LoginBox>
      {button}
      {isLoggedIn ? (
        <StyledParagraph>환영합니다!</StyledParagraph>
      ) : (
        <StyledParagraph>로그인 해주세요</StyledParagraph>
      )}
    </LoginBox>
  );
};

export default LoginControl;
