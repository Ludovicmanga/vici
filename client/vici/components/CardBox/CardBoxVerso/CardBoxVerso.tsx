import React, { useEffect, useState } from "react";
import styles from "./CardBoxVerso.module.scss";
import { Button } from "@mui/material";
import { KnownledgeLevel } from "@/types/enums";
import { updateKnowledgeLevel } from "@/helpers/flashcards";
import { FlashCard } from "@/types/constants";

type Props = {
  card: FlashCard;
};

const CardBoxVerso = (props: Props) => {

  const firstLineBtns = [
    {
      label: "Very well",
      type: KnownledgeLevel.veryWell,
    },
    {
      label: "Good",
      type: KnownledgeLevel.good,
    },
  ];
  const secondLineBtns = [
    {
      label: "So so",
      type: KnownledgeLevel.soso,
    },
    {
      label: "Terrible",
      type: KnownledgeLevel.terrible,
    },
  ];

  return (
    <div>
      <div className={styles.answerContainer}>{props.card.answer}</div>
      <div className={styles.isKnownAnswerSectionContainer}>
        <div className={styles.isKnownAnswerSection}>
          <div className={styles.isKnownAnswerSectionTitle}>
            I know this answer...
          </div>
          <div className={styles.btnGroupContainer}>
            {firstLineBtns.map((btn) => (
              <Button
                key={btn.type}
                onClick={() => updateKnowledgeLevel(props.card, btn.type)}
                className={styles.btn}
                variant="contained"
                fullWidth
              >
                {btn.label}
              </Button>
            ))}
          </div>
          <div className={styles.btnGroupContainer}>
            {secondLineBtns.map((btn) => (
              <Button
                key={btn.type}
                onClick={() => updateKnowledgeLevel(props.card, btn.type)}
                className={styles.btn}
                variant="contained"
                fullWidth
              >
                {btn.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBoxVerso;
