import { makeAutoObservable } from "mobx";

class AuthStore {
  accessToken: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setAccessToken(token: string) {
    this.accessToken = token;
  }

  clearAccessToken() {
    this.accessToken = null;
  }
}

const authStore = new AuthStore();
export default authStore;
