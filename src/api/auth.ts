import axios from "axios";

export async function signup(payload: ISignup) {
  const res = await axios.post(
    "https://front-mission.bigs.or.kr/auth/signup",
    payload
  );
  return res.data;
}

export async function login(payload: ILogin) {
  const res = await axios.post<ResLogin>(
    "https://front-mission.bigs.or.kr/auth/signin",
    payload
  );
  return res.data;
}

export async function refresh(payload: IRefreshToken) {
  const res = await axios.post<ResRefresh>(
    "https://front-mission.bigs.or.kr/auth/refresh",
    payload
  );
  sessionStorage.setItem("refreshToken", res.data.refreshToken);
  return res.data;
}
