import React, { useState } from "react";
import * as S from "./Login.styles";
import InputForm from "./InputForm/InputForm";
import Btn from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import authStore from "../../stores/AuthStore";
import { isValidEmail } from "../../utils/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await login({ username: email, password });
      authStore.setAccessToken(result.accessToken);
      sessionStorage.setItem("refreshToken", result.refreshToken);
      // sessionStorage.setItem("userEmail", email);
      navigate("/board");
    } catch (error: any) {
      alert(error.response?.data?.message || "로그인에 실패했습니다.");
    }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <h1>로그인</h1>
        <form onSubmit={handleLogin}>
          <InputForm
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (e.target.value === "" || isValidEmail(e.target.value)) {
                setEmailError("");
              } else {
                setEmailError("유효한 이메일 주소를 입력하세요.");
              }
            }}
          />
          {emailError && <S.ErrorMessage>{emailError}</S.ErrorMessage>}
          <InputForm
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <S.SignupRow>
            <Link to="/signup">회원가입</Link>
          </S.SignupRow>
          <Btn type="submit" disabled={!!emailError || !email || !password}>
            로그인
          </Btn>
        </form>
      </S.Wrapper>
    </S.Container>
  );
};

export default Login;
