import { setCookie, deleteCookie } from "cookies-next";

export function saveToken(token) {
  setCookie("token", token, {
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
    sameSite: "lax"
  });
}

export function removeToken() {
  deleteCookie("token");
}