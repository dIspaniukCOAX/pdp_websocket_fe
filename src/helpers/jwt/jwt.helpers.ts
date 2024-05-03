import { localStorageService } from "../storage/storage.helpers";

import { LOCAL_STORAGE_KEYS } from "@/constants";

const {
  getItem: getToken,
  setItem: setToken,
  removeItem: removeToken
} = localStorageService<string>(LOCAL_STORAGE_KEYS.JWT_TOKEN);

export const getJWTToken = () => {
  return getToken();
};

export const setJWTToken = (token: string) => {
  return setToken(token);
};

export const removeJWTToken = () => {
  return removeToken();
};
