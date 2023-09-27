import { setUser } from "@/redux/loggedUserSlice";
import { Dispatch } from "redux";
import { redirect } from 'next/navigation'

export const checkAuthenticated = async (dispatch: Dispatch) => {

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/check-auth`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      credentials: "include",
    }
  ).then(async res => await res.json());

  if (response.user) {
    dispatch(setUser({
        user: response.user,
    }))
  } else {
    dispatch(setUser({
        user: null,
    }))
  }
  return response;
};

export const login = async (email: string, password: string) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    }
  ).then(async res => await res.json());
};

export const logOut = async (dispatch: Dispatch) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        credentials: "include",
      }
    ).then(async res => await res.json());

    if (response) {
        dispatch(setUser({
            user: null,
        }))
    }
  };


export const signup = async (email: string, password: string) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/sign-up`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    }
  ).then(async res => await res.json());
};
