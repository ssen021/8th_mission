import styled from "styled-components";

export const MovieListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 20px;
  justify-content: center;
  margin: 20px;
  margin-left: 20px;
`;

export const DetailInfo = styled.div`
  display: flex;
  margin-left: 200px;
  margin-top: 50px;

  p {
    font-size: 30px;
    font-weight: bold;
    margin: 0;
  }
`;

export const DetailPoster = styled.img`
  width: 300px;
  height: 450px;
`;

export const NotFoundInfo = styled.div`
  margin-left: 200px;

  h2 {
    font-size: 30px;
  }

  p {
    font-size: 20px;
  }

  button {
    font-size: 20px;
    border: none;
    background-color: transparent;
    color: red;
    cursor: pointer;
  }
`;
export const LoginInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  p {
    font-size: 20px;
  }
  input {
    height: 40px;
    width: 500px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 15px;
  }
  button {
    margin-top: 10px;
    height: 50px;
    width: 500px;
    color: #fff;
    background-color: #0e0f37;
    border-radius: 30px;
    font-size: 20px;
  }
`;
export const RedP = styled.div`
  color: red;
  font-size: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
