import styled from "styled-components";

export const MovieDescription = styled.div`
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  font-size: 11px;
  color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  display: none;
  z-index: 1;

  .movie-description-title {
    font-weight: bold;
    font-size: 13px;
    margin-bottom: 10px;
  }

  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 15;
    overflow: hidden;
    margin: 0;
  }
`;

export const StyledMovie = styled.div`
  position: relative;
  background-color: #3f4486;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  cursor: pointer;
  height: 350px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  &:hover ${MovieDescription} {
    // 이 부분을 추가합니다.
    display: block;
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  height: 280px;
  display: block;
  object-fit: fill;
`;

export const MovieInfo = styled.div`
  background-color: #3f4486;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  .movie-title {
    text-align: left;
    margin-right: 10px;
    font-size: 12px;
    font-weight: bold;
  }

  .movie-rating {
    text-align: right;
    font-size: 13px;
  }
`;
