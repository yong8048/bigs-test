import React from "react";
import authStore from "./AuthStore";

export const AuthStoreContext = React.createContext(authStore);

export const useAuthStore = () => React.useContext(AuthStoreContext);
