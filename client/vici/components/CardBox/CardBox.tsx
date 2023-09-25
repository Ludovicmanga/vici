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
  setNextActiveCard: () => void
};

const CardBox = (props: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipTheCard = () => {
    setIsFlipped(true);
  };

  return (
    <Card className={styles.container}>
      <CardContent>
        <div className={styles.cardTitleContainer}>
          <div className={styles.cardTitle}>{isFlipped ? 'Answer' : 'Question'}</div>
          <Button onClick={props.setNextActiveCard} variant="contained" startIcon={<BiSolidRightArrow />}>
            Next card
          </Button>
        </div>
        {isFlipped ? (
          <CardBoxVerso setNextActiveCard={props.setNextActiveCard} card={props.card} />
        ) : (
          <CardBoxRecto card={props.card} flipTheCard={flipTheCard} />
        )}
      </CardContent>
    </Card>
  );
};

export default CardBox;
