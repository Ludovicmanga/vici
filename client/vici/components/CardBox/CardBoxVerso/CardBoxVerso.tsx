import React from "react";
import styles from "./CardBoxVerso.module.scss";
import { Button } from "@mui/material";

type Props = {
  card: {
    id: number;
    question: string;
    answer: string;
    known: string;
  };
};

const CardBoxVerso = (props: Props) => {
  return (
    <div>
      <div className={styles.answerContainer}>{props.card.answer}</div>
      <div className={styles.isKnownAnswerSectionContainer}>
        <div className={styles.isKnownAnswerSection}>
          <div className={styles.isKnownAnswerSectionTitle}>I know this answer...</div>
          <div className={styles.btnGroupContainer}>
            <Button className={styles.btn} variant="contained" fullWidth>Very well</Button>
            <Button className={styles.btn} variant="contained" fullWidth>Good</Button>
          </div>
          <div className={styles.btnGroupContainer}>
            <Button className={styles.btn} variant="contained" fullWidth>So So</Button>
            <Button className={styles.btn} variant="contained" fullWidth>Terrible</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBoxVerso;
