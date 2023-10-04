import React, { useEffect, useState } from "react";
import styles from "./CardBoxVerso.module.scss";
import { Button } from "@mui/material";
import { KnownledgeLevel } from "@/types/enums";
import { updateKnowledgeLevel } from "@/helpers/flashcards";
import { FlashCard } from "@/types/constants";
import CustomSnackbar from "@/components/CustomSnackbar/CustomSnackbar";

type Props = {
  card: FlashCard;
  setNextActiveCard: () => void;
  setSnackBar: React.Dispatch<
    React.SetStateAction<{
      open: boolean;
      message: string;
      severity: null | "success" | "error" | "warning" | "info";
      action: React.ReactNode | null;
    }>
  >;
  flipTheCard: () => void;
};

const CardBoxVerso = (props: Props) => {
  const handleUpdateKnowledgeLevel = async (
    updatedKnowledgeLevel: KnownledgeLevel
  ) => {
    const response = await updateKnowledgeLevel(
      props.card,
      updatedKnowledgeLevel
    );
    if (response) {
      props.setSnackBar({
        open: true,
        message: "La carte a été mise à jour",
        severity: "success",
        action: null,
      });
      props.flipTheCard();
      props.setNextActiveCard();
    }
  };

  const btns = [
    {
      label: "Parfaitement",
      type: KnownledgeLevel.veryWell,
      icon: <div>😍</div>,
    },
    {
      label: "Bien",
      type: KnownledgeLevel.good,
      icon: <div>😎</div>,
    },
    {
      label: "Bof",
      type: KnownledgeLevel.soso,
      icon: <div>🙄</div>,
    },
    {
      label: "Pas du tout",
      type: KnownledgeLevel.terrible,
      icon: <div>🤬</div>,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.answerContainer}>{props.card.answer}</div>
      <div className={styles.isKnownAnswerSectionContainer}>
        <div className={styles.isKnownAnswerSection}>
          <div className={styles.isKnownAnswerSectionTitle}>
            Je connais cette réponse...
          </div>
          <div className={styles.btnGroupContainer}>
            {btns.map((btn) => (
              <div className={styles.btnContainer} key={btn.type}>
                <Button
                  onClick={async () =>
                    await handleUpdateKnowledgeLevel(btn.type)
                  }
                  className={styles.btn}
                  variant="contained"
                >
                  <div className={styles.btnLabel}>
                    <div className={styles.btnIcon}>{btn.icon}</div>
                    <div className={styles.btnText}>{btn.label}</div>
                  </div>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBoxVerso;
