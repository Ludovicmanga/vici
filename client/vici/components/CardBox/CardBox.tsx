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
};

const CardBox = (props: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipTheCard = () => {
    setIsFlipped(true);
  };

  return (
    <div className={styles.container}>
      <Card className={styles.cardContainer}>
        <CardContent>
          <div className={styles.top}>
            <div className={styles.cardTitle}>
              {isFlipped ? "🤯 Réponse" : "🤔 Question"}
            </div>
            <Button
              onClick={props.setNextActiveCard}
              variant="contained"
              startIcon={<div>👉</div>}
            >
              Carte suivante
            </Button>
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
