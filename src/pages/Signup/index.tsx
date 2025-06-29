import React, { useState } from "react";
import * as S from "./Signup.styles";
import Btn from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { signup } from "../../api/auth";
import { isValidEmail, isValidPassword } from "../../utils/auth";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (!value || isValidEmail(value)) {
      setEmailError("");
    } else {
      setEmailError("유효한 이메일 주소를 입력하세요.");
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (!value || isValidPassword(value)) {
      setPasswordError("");
    } else {
      setPasswordError(
        "비밀번호는 8자 이상, 숫자, 영문자, 특수문자(!%*#?&) 1개 이상을 포함해야 합니다."
      );
    }
    if (confirmPassword && value !== confirmPassword) {
      setPasswordCheckError("비밀번호가 일치하지 않습니다.");
    } else {
      setPasswordCheckError("");
    }
  };

  const handlePasswordCheckChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (password && value !== password) {
      setPasswordCheckError("비밀번호가 일치하지 않습니다.");
    } else {
      setPasswordCheckError("");
    }
  };

  const isFormValid =
    email &&
    password &&
    confirmPassword &&
    name &&
    !emailError &&
    !passwordError &&
    !passwordCheckError;

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup({ username: email, name, password, confirmPassword });
      alert("회원가입이 완료되었습니다!");
      navigate("/login");
    } catch (error: any) {
      const errorData = error.response.data;
      alert(Object.values(errorData));
    }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Back>
          <button onClick={() => navigate(-1)}>
            <IoArrowBack />
          </button>
          <h1>회원가입</h1>
        </S.Back>
        <form onSubmit={handleSignup}>
          <div>
            <label>이메일</label>
            <input type="email" value={email} onChange={handleEmailChange} />
            {emailError && <S.ErrorMessage>{emailError}</S.ErrorMessage>}
          </div>
          <div>
            <label>비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              autoComplete="new-password"
            />
            {passwordError && <S.ErrorMessage>{passwordError}</S.ErrorMessage>}
          </div>
          <div>
            <label>비밀번호 확인</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={handlePasswordCheckChange}
              autoComplete="new-password"
            />
            {passwordCheckError && (
              <S.ErrorMessage>{passwordCheckError}</S.ErrorMessage>
            )}
          </div>
          <div>
            <label>이름</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <Btn type="submit" disabled={!isFormValid}>
            회원가입
          </Btn>
        </form>
      </S.Wrapper>
    </S.Container>
  );
};

export default Signup;
