"use client";

import React, { useState } from "react";
import { Button, Card, CardContent } from "@mui/material";
import styles from "./CardBox.module.scss";
import { BiSolidRightArrow } from "react-icons/bi";
import CardBoxRecto from "./CardBoxRecto/CardBoxRecto";
import CardBoxVerso from "./CardBoxVerso/CardBoxVerso";
import { FlashCard } from "@/types/constants";

type Props = {
  card: FlashCard;
  setNextActiveCard: () => void;
  disableNextBtn: boolean;
};

const CardBox = (props: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipTheCard = () => {
    setIsFlipped(true);
  };

  return (
    <div className={styles.container}>
      <Card elevation={15} className={styles.cardContainer}>
        <CardContent>
          <div className={styles.top}>              {isFlipped ? (
                <div className={styles.cardTitle}>
                  <div>🤯</div>
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
