"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setUser } from "@/redux/loggedUserSlice";
import { Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import styles from "./AuthForm.module.scss";
import { login, signup } from "@/helpers/auth";
import { User } from "@/types/constants";
import Link from "next/link";
import LoadingButton from "@mui/lab/LoadingButton";
import Image from "next/image";
import Logo from "@/public/illustrations/vici black logo.svg";

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
      <Paper elevation={11} className={styles.wrapper}>
        <div className={styles.logoContainer}>
          <Image className={styles.logo} src={Logo} width={100} alt="logo" />
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.illustrationContainer}>
            <div className={styles.iframeContainer}>
              <iframe
                src="https://giphy.com/embed/Yy6GhtIk8l76u8nlIF"
                width="100%"
                height="100%"
                className={styles.iFrame}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className={styles.formWrapper}>
              <div className={styles.pageTitle}>
                {props.type === "login" ? "Se connecter" : "S\'inscrire"}
              </div>
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
      </Paper>
    </div>
  );
};

export default AuthForm;
