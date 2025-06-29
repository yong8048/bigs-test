import axios from "axios";
import { Post } from "./wrapper";

export interface ISignup {
  username: string;
  name: string;
  password: string;
  confirmPassword: string;
}
export interface ILogin {
  username: string;
  password: string;
}

export interface IRefreshToken {
  refreshToken: string;
}

export async function signup(payload: ISignup) {
  // 회원가입은 토큰이 필요 없으므로 순수 axios 사용
  const res = await axios.post(
    "https://front-mission.bigs.or.kr/auth/signup",
    payload
  );
  return res.data;
}

export async function login(payload: ILogin) {
  // 로그인은 토큰이 필요 없으므로 순수 axios 사용
  const res = await axios.post<ResLogin>(
    "https://front-mission.bigs.or.kr/auth/signin",
    payload
  );
  return res.data;
}

export async function refresh(payload: IRefreshToken) {
  console.log("refresh 함수 호출, payload:", payload);
  // refresh는 토큰 없이 호출되어야 하므로 순수 axios 사용
  const res = await axios.post<ResRefresh>(
    "https://front-mission.bigs.or.kr/auth/refresh",
    payload
  );
  console.log("refresh 응답:", res.data);
  sessionStorage.setItem("refreshToken", res.data.refreshToken);
  return res.data;
}
