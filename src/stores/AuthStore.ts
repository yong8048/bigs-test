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

    const decodedToken = decodeJWT(token);
    if (decodedToken && decodedToken.name && decodedToken.username) {
      this.user = {
        email: decodedToken.email || decodedToken.username,
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
