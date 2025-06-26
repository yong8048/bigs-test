import axios from "axios";

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
  const res = await axios.post(
    "https://front-mission.bigs.or.kr/auth/signup",
    payload,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
}

export async function login(payload: ILogin) {
  const res = await axios.post(
    "https://front-mission.bigs.or.kr/auth/signin",
    payload,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
}
export async function refresh(payload: IRefreshToken) {
  const res = await axios.post(
    "https://front-mission.bigs.or.kr/auth/refresh",
    payload,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
}
