"use client";

import React from "react";
import styles from "./EmptyComponent.module.scss";
import Image from "next/image";
import BoxImg from "@/public/illustrations/box.png";
import { Button, Paper } from "@mui/material";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

type Props = {};

const EmptyComponent = (props: Props) => {
  const router = useRouter();

  const handleRedirectCreatePage = () => {
    router.push('/createCards');
  }

  return (
    <div className={styles.container}>
      <Paper elevation={8} className={styles.wrapper}>
        <div className={styles.subWrapper}>
          <div className={styles.imgContainer}>
            <iframe
              src="https://giphy.com/embed/g01ZnwAUvutuK8GIQn"
              width="480"
              height="270"
              frameBorder="0"
              allowFullScreen
            />
          </div>
          <div className={styles.bottomContainer}>
            <div className={styles.mainText}>
              Vous n'avez pas encore créé de flash cards
            </div>
            <div className={styles.btnContainer}>
              <div className={styles.rightHandEmoji}>👉</div>
              <Button onClick={handleRedirectCreatePage} size="large" variant="contained">Créer des flash cards</Button>
              <div className={styles.leftHandEmoji}>👈</div>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default EmptyComponent;
