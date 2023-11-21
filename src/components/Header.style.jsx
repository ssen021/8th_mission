import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle` // 배경꽉채우기
  body{
    padding: 0;
    margin: 0;
  }
`;
export const BannerInfo = styled.div`
  background-color: rgb(21, 21, 73);
  height: 50px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0;
`;

export const StyledLink = styled(Link)`
  margin-right: 20px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
`;
