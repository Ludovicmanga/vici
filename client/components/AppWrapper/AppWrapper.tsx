"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { ReactNode, useEffect, useState } from "react";
import AuthForm from "../AuthForm/AuthForm";
import { checkAuthenticated } from "@/helpers/auth";
import StyledSkeleton from "../Skeleton/Skeleton";
import { Alert, Snackbar } from "@mui/material";
import { useRouter } from "next/navigation";

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
  const generalPropertiesState = useAppSelector(state => state.generalProperties);

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
        <AuthForm type="login" />
      )}
      {/* <Snackbar
        open={generalPropertiesState.snackbar.open}
        autoHideDuration={6000}
        onClose={() => console.log("close")}
      >
        <Alert
          onClose={() => console.log("close")}
          severity={generalPropertiesState.snackbar.severity || 'success'}
          sx={{ width: "100%" }}
        >
          { generalPropertiesState.snackbar.message }
        </Alert>
      </Snackbar> */}
    </>
  );
};

export default AppWrapper;
