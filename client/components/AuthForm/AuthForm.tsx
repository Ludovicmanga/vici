"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setUser } from "@/redux/loggedUserSlice";
import { Paper, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./AuthForm.module.scss";
import { login, signup } from "@/helpers/auth";
import { User } from "@/types/constants";
import Link from "next/link";
import LoadingButton from "@mui/lab/LoadingButton";
import Image from "next/image";
import Logo from "@/public/illustrations/vici_black.svg";
import { useRouter } from "next/navigation";
import CustomSnackbar from "../CustomSnackbar/CustomSnackbar";

type Props = {
  type: "login" | "sign-up";
};

const AuthForm = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageMode, setPageMode] = useState(props.type);
  const [snackBar, setSnackBar] = useState<{
    open: boolean;
    message: string;
    severity: null | "success" | "error" | "warning" | "info";
    action: React.ReactNode | null;
  }>({
    open: false,
    message: "",
    severity: null,
    action: null,
  });

  useEffect(() => {
    setPageMode(props.type);
  }, [props.type])

  const dispatch = useAppDispatch();

  const userState = useAppSelector((state) => state.loggedUser);
  const router = useRouter();

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
      setSnackBar({
        open: true,
        severity: 'success',
        action: null,
        message: 'Votre compte a bien été créé !'
      })
      setPageMode('login');
    }
    setLoading(false);
  };

  useEffect(() => {
    if (userState.user) {
      router.push("/");
    }
  }, [userState]);

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
                src={
                  pageMode === "login"
                    ? "https://giphy.com/embed/Yy6GhtIk8l76u8nlIF"
                    : "https://giphy.com/embed/mCbUi0FyYhHHhutEV8"
                }
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
              {pageMode === "login" ? "Se connecter" : "S'inscrire"}
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
              onClick={pageMode === "login" ? handleLogin : handleSignUp}
              fullWidth
              loading={loading}
              loadingIndicator="Chargement..."
              variant="contained"
            >
              {pageMode === "login" ? "Se connecter" : "S'inscrire"}
            </LoadingButton>

            <div className={styles.noAccountYetText}>
              {pageMode === "login" ? "Pas de compte ? " : "Déjà un compte ? "}
              <Link className={styles.noAccountYetTextLink} href={pageMode === "login" ? "/signUp" : "/login"}>
                {pageMode === "login" ? "S'inscrire" : "Se connecter"}
              </Link>
            </div>
          </div>
        </div>
        <CustomSnackbar snackBar={snackBar} setSnackBar={setSnackBar} />
      </Paper>
    </div>
  );
};

export default AuthForm;
