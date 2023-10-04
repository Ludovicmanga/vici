"use client";

import React, { useState } from "react";
import { Button, Card, CardContent } from "@mui/material";
import styles from "./CardBox.module.scss";
import CardBoxRecto from "./CardBoxRecto/CardBoxRecto";
import CardBoxVerso from "./CardBoxVerso/CardBoxVerso";
import { FlashCard } from "@/types/constants";

type Props = {
  card: FlashCard;
  setNextActiveCard: () => void;
  disableNextBtn: boolean;
  setSnackBar: React.Dispatch<React.SetStateAction<{
    open: boolean;
    message: string;
    severity: null | "success" | "error" | "warning" | "info";
    action: React.ReactNode | null;
}>>
};

const CardBox = (props: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipTheCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={styles.container}>
      <Card elevation={18} className={styles.cardContainer}>
        <CardContent>
          <div className={styles.top}>
            {isFlipped ? (
              <div className={styles.cardTitle}>
                <div className={styles.cardTitleEmoji}>🤯</div>
                <div className={styles.cardTitleText}>Réponse</div>
              </div>
            ) : (
              <div className={styles.cardTitle}>
                <div>🤔</div>
                <div className={styles.cardTitleText}>Question</div>
              </div>
            )}
            <div>
              <Button
                onClick={props.setNextActiveCard}
                variant="contained"
                startIcon={<div>👉</div>}
                disabled={props.disableNextBtn}
              >
                <div className={styles.nextBtnText}>Carte suivante</div>
              </Button>
            </div>
          </div>
          {isFlipped ? (
            <CardBoxVerso
              setNextActiveCard={props.setNextActiveCard}
              card={props.card}
              setSnackBar={props.setSnackBar}
              flipTheCard={flipTheCard}
            />
          ) : (
            <CardBoxRecto card={props.card} flipTheCard={flipTheCard} />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CardBox;
