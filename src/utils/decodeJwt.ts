import { jwtDecode } from "jwt-decode"

export const decodeJwt = (token:string) => {
    const decoded = jwtDecode(token);
    return decoded;
}