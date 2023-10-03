import React from "react";
import styles from "./page.module.scss";
import CreateForm from "@/components/CreateForm/CreateForm";
import { Paper } from "@mui/material";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.titleContainer}>
          <div className={`${styles.emoji} ${styles.leftEmoji}`}>💪</div>
          <div className={styles.titleText}>
            Crée des cartes et entraine ta mémoire
          </div>
          <div className={`${styles.emoji} ${styles.rightEmoji}`}>💪</div>
        </div>
      </div>
      <div className={styles.sectionsContainer}>
        <Paper className={`${styles.section} ${styles.left}`}>
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
          <CreateForm />
        </Paper>
      </div>
    </div>
  );
};

export default page;
