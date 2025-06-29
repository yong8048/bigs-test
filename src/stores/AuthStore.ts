import { makeAutoObservable } from "mobx";
import { decodeJWT } from "../utils/auth";

interface User {
  email: string;
  name: string;
  username: string;
}

class AuthStore {
  accessToken: string | null = null;
  user: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setAccessToken(token: string) {
    this.accessToken = token;

    // JWT 토큰에서 사용자 정보 추출
    const decodedToken = decodeJWT(token);
    if (decodedToken && decodedToken.name && decodedToken.username) {
      this.user = {
        email: decodedToken.email || decodedToken.username, // email이 없으면 username 사용
        name: decodedToken.name,
        username: decodedToken.username,
      };
    }
  }

  setUser(user: User) {
    this.user = user;
  }

  clearAccessToken() {
    this.accessToken = null;
  }

  logout() {
    this.accessToken = null;
    this.user = null;
    sessionStorage.removeItem("refreshToken");
    sessionStorage.removeItem("userEmail");
    // 쿠키가 있다면 쿠키도 삭제
    document.cookie =
      "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }

  get isLoggedIn() {
    return !!this.accessToken;
  }

  get userEmail() {
    return this.user?.email || "";
  }

  get userName() {
    return this.user?.name || "";
  }

  get userUsername() {
    return this.user?.username || "";
  }
}

const authStore = new AuthStore();
export default authStore;
