"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setUser } from "@/redux/loggedUserSlice";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import styles from "./AuthForm.module.scss";
import { login, signup } from "@/helpers/auth";
import { User } from "@/types/constants";
import Link from "next/link";
import LoadingButton from "@mui/lab/LoadingButton";

type Props = {
  type: "login" | "sign-up";
};

const AuthForm = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    setLoading(true);
    const userResponse: {
      user: User | null;
    } = await login(email, password);
    if (userResponse) {
      dispatch(setUser(userResponse));
    }
    setLoading(false);
  };
  const handleSignUp = async () => {
    setLoading(true);
    const userResponse: {
      user: User | null;
    } = await signup(email, password);
    if (userResponse) {
      dispatch(setUser(userResponse));
    }
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.input}>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            label="email"
            value={email}
            fullWidth
          ></TextField>
        </div>
        <div className={styles.input}>
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            label="password"
            value={password}
            type="password"
            fullWidth
          ></TextField>
        </div>
        <LoadingButton
          onClick={props.type === "login" ? handleLogin : handleSignUp}
          fullWidth
          loading={loading}
          loadingIndicator="Loading…"
          variant="contained"
        >
          {props.type === "login" ? "Se connecter" : "S'inscrire"}
        </LoadingButton>
        {props.type === "login" && (
          <div className={styles.noAccountYetText}>
            No account yet ? <Link href="/signUp">Sign up</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
