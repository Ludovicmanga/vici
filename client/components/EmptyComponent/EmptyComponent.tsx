import React from "react";
import styles from "./EmptyComponent.module.scss";
import Image from "next/image";
import BoxImg from "@/public/illustrations/box.png";
import { Button } from "@mui/material";

type Props = {};

const EmptyComponent = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
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
              Vous n'avez pas encore créé de flash cards{" "}
              <div className={`${styles.titleEmoji} ${styles.titleEmojiLeft}`}>
                😨
              </div>
              <div className={styles.titleEmoji}>😭</div>
            </div>
            <div className={styles.btnContainer}>
              <div className={styles.rightHandEmoji}>👉</div>
              <Button size="large" variant="contained">Créer des flash cards</Button>
              <div className={styles.leftHandEmoji}>👈</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyComponent;
