"use client";

import React, { useState } from "react";
import { Button, Card, CardContent } from "@mui/material";
import styles from "./CardBox.module.scss";
import { BiSolidRightArrow } from "react-icons/bi";
import CardBoxRecto from "./CardBoxRecto/CardBoxRecto";
import CardBoxVerso from "./CardBoxVerso/CardBoxVerso";

type Props = {
  card: {
    id: number;
    question: string;
    answer: string;
    known: string;
  };
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
          <CardBoxVerso card={props.card} />
        ) : (
          <CardBoxRecto card={props.card} flipTheCard={flipTheCard} />
        )}
      </CardContent>
    </Card>
  );
};

export default CardBox;
