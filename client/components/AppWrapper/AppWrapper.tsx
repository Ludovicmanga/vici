"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { ReactNode, useEffect, useState } from "react";
import AuthForm from "../AuthForm/AuthForm";
import { checkAuthenticated } from "@/helpers/auth";
import StyledSkeleton from "../StyledSkeleton/StyledSkeleton";
import { usePathname } from 'next/navigation'

type Props = {
  children: ReactNode;
};

const AppWrapper = (props: Props) => {
  const dispatch = useAppDispatch();
  const pathName = usePathname();

  const handleCheckAuth = async () => {
    const authRes = await checkAuthenticated(dispatch);
    if (authRes) {
      setIsLoadingAuth(false);
    } else {
      throw new Error("Auth problem");
    }
  };
  const loggedUserState = useAppSelector((state) => state.loggedUser);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);

  useEffect(() => {
    handleCheckAuth();
  }, [loggedUserState.user?.email]);

  return (
    <>
      {isLoadingAuth ? (
        <StyledSkeleton />
      ) : loggedUserState.user ? (
        <div>{props.children}</div>
      ) : (
        <AuthForm type={pathName === '/signUp' ? 'sign-up' : 'login'} />
      )}
    </>
  );
};

export default AppWrapper;
