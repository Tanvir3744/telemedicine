/* eslint-disable @typescript-eslint/no-explicit-any */
import { decodeJwt } from "@/utils/decodeJwt";
import { getFromLocalStorage,  setToLocalStorage } from "@/utils/local_storage"
export const AUTH_KEY = "accessToken";

//  set users information into local storage
export const storeUserInfo = ({accessToken} : {accessToken: string}) => {
    return setToLocalStorage(AUTH_KEY, accessToken)
}

// get user info from localstorage and deconde them ;

export const getUserInfo = () => {
     const userToken = getFromLocalStorage(AUTH_KEY);

     if(userToken){
        // decode user data with jwtdecode
        const decodedData: any = decodeJwt(userToken);
        return {
            ...decodedData,
            role: decodedData?.role?.toLowerCase(),
        }
     }
}

export const isLoggedIn = () => {
    const isUserExist = getFromLocalStorage(AUTH_KEY);
    if(isUserExist){
        return !!isUserExist;
    }
};

export const removeFromLocalStorage = (key:string) => {
    return localStorage.removeItem(key)
}