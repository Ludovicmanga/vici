"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { ReactNode, useEffect, useState } from "react";
import AuthForm from "../AuthForm/AuthForm";
import { checkAuthenticated } from "@/helpers/auth";
import StyledSkeleton from "../Skeleton/Skeleton";

type Props = {
  children: ReactNode;
};

const AppWrapper = (props: Props) => {
  const dispatch = useAppDispatch();

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
  }, [loggedUserState.user]);

  return isLoadingAuth ? (
    <StyledSkeleton />
  ) : loggedUserState.user ? (
    <div>{props.children}</div>
  ) : (
    <AuthForm type="login" />
  );
};

export default AppWrapper;
