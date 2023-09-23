import React from "react";
import { Button } from "@mui/material";
import styles from "./CardBoxRecto.module.scss";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";

type Props = {
  card: {
    id: number;
    question: string;
    answer: string;
    known: string;
  };
  flipTheCard: () => void
};

const CardBoxRecto = (props: Props) => {
  return (
    <div>
      <div className={styles.questionContainer}>{props.card.question}</div>
      <div className={styles.btnContainer}>
        <Button
          onClick={props.flipTheCard}
          variant="contained"
          startIcon={<FlipCameraAndroidIcon />}
        >
          Flip the card
        </Button>
      </div>
    </div>
  );
};

export default CardBoxRecto;
