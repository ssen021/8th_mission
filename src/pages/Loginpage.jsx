import React, { useState } from "react"; // useState 추가
import { useDispatch, useSelector } from "react-redux";
import { setUserId, setUserPassword, setLoading } from "../store/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginInfo, RedP } from "./Movies.style";

export default function Loginpage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId, userPassword, loading } = useSelector((state) => state.auth);
  const [showLoading, setShowLoading] = useState(false); // 추가

  const handleHome = async () => {
    // 확인 버튼을 누를 때 유효성 검사를 수행
    if (!userId || !userPassword) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    dispatch(setLoading(true));

    try {
      const response = await axios.post("http://localhost:3000/user/login", {
        id: userId,
        pw: userPassword,
      });

      // 로그인 성공
      if (response.data.code === 200) {
        console.log("로그인 성공", response.data.userInfo);
        setShowLoading(true); // 추가

        // 1.5초 후에 Loading 상태 변경
        setTimeout(() => {
          setShowLoading(false);
          navigate("/Home");
        }, 1500);
      } else {
        // 로그인 실패
        console.error("로그인 실패", response.data.code);
        alert("로그인에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("에러 발생!!!", error);
      alert("에러가 발생했습니다. 다시 시도해주세요.");
    } finally {
      dispatch(setLoading(false));
    }
  };

  const EmailChange = (e) => {
    const inputValue = e.target.value;
    dispatch(setUserId(inputValue));

    // 나머지 이메일 유효성 검사 부분은 여기에 추가
  };

  const PWChange = (e) => {
    const inputValue = e.target.value;
    dispatch(setUserPassword(inputValue));

    // 나머지 비밀번호 유효성 검사 부분은 여기에 추가
  };

  return (
    <LoginInfo>
      <h2>이메일과 비밀번호를 입력해주세요</h2>
      <p>이메일 주소</p>
      <input type="text" value={userId} onChange={EmailChange} />
      {userId ? (
        <RedP>&nbsp;</RedP>
      ) : (
        <RedP>올바른 이메일을 입력해주세요.</RedP>
      )}

      <p>비밀번호</p>
      <input type="password" value={userPassword} onChange={PWChange} />
      {userPassword ? (
        <RedP>&nbsp;</RedP>
      ) : (
        <RedP>영문,숫자,특수문자 포함 8자 이상 입력하세요.</RedP>
      )}
      <button onClick={handleHome} disabled={loading}>
        {showLoading ? "Loading..." : "확인"} {/* 변경 */}
      </button>
    </LoginInfo>
  );
}
