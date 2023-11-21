import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginBox, StyledParagraph, Button } from "./LoginControl.style";

const LoginControl = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    navigate("/login");
    setIsLoggedIn(true);
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
