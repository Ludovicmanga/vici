import React from "react";
import styles from "./page.module.scss";
import CreateForm from "@/components/CreateForm/CreateForm";
import { Paper } from "@mui/material";

type Props = {};

const page = (props: Props) => {
  return (
    <div className={styles.container}>
      <Paper className={`${styles.section} ${styles.left}`}>
        <div className={styles.contextTitle}>
          <div className={`${styles.emoji} ${styles.leftEmoji}`}>💪</div>
          <div className={styles.titleText}>
            Crée des cartes et entraine ta mémoire !{" "}
          </div>
          <div className={`${styles.emoji} ${styles.rightEmoji}`}>💪</div>
        </div>
        <div className={styles.contextImageContainer}>
          <iframe
            src="https://giphy.com/embed/WRQBXSCnEFJIuxktnw"
            width="480"
            height="307"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </Paper>
      <Paper className={`${styles.section} ${styles.right}`}>
        <div className={styles.createFormContainer}>
          <CreateForm />
        </div>
      </Paper>
    </div>
  );
};

export default page;
