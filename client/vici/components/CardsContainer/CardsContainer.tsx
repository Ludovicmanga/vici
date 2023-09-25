"use client";

import React, { useEffect, useState } from "react";
import CardBox from "../CardBox/CardBox";
import { FlashCard } from "@/types/constants";

type Props = {
  cardsList: FlashCard[];
};

const CardsContainer = (props: Props) => {
  const [activeCard, setActiveCard] = useState(props.cardsList[0]);

  const setNextActiveCard = () => {
    const nextCard = selectRandomItem();
    if (nextCard) {
      setActiveCard(nextCard);
    }
  };
  const cardsListWithoutCurrent = props.cardsList.filter(
    (card) => card.id !== activeCard.id
  );
  const totalImportance = cardsListWithoutCurrent.reduce(
    (total, item) => total + item.known,
    0
  );

  function selectRandomItem() {
    const randomValue = Math.random() * totalImportance;
    let cumulativeImportance = 0;

    for (const item of cardsListWithoutCurrent) {
      cumulativeImportance += item.known;

      if (randomValue <= cumulativeImportance) {
        return item;
      }
    }
  }

  return (
    <CardBox
      key={activeCard.id}
      card={activeCard}
      setNextActiveCard={setNextActiveCard}
    />
  );
};

export default CardsContainer;
