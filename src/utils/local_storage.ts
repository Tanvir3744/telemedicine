import { AUTH_KEY, removeFromLocalStorage } from "@/service/storeUserInfo";

export const setToLocalStorage = (key: string, accessToken: string) => {
  if (!key || typeof window === "undefined" || !accessToken) {
    return "";
  }
  console.log(key, accessToken, "from local storage function")
  return localStorage.setItem(key, accessToken);

};


export const getFromLocalStorage = (key:string) => {
  return localStorage.getItem(key);
}

export const removeUser = () => {
  return removeFromLocalStorage(AUTH_KEY)
}