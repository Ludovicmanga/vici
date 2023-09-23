"use client";

import React, { useEffect, useState } from "react";
import CardBox from "../CardBox/CardBox";

type Props = {
  cardsList: {
    id: number;
    question: string;
    answer: string;
    known: string;
  }[];
};

const CardsContainer = (props: Props) => {
  const [activeCard, setActiveCard] = useState(props.cardsList[0]);

  const setNextActiveCard = () => {
    const indexOfActiveCard = props.cardsList.indexOf(activeCard);
    props.cardsList[indexOfActiveCard + 1]
      ? setActiveCard(props.cardsList[indexOfActiveCard + 1])
      : setActiveCard(props.cardsList[0]);
  };

  return (
    <CardBox
      key={activeCard.id}
      card={activeCard}
      setNextActiveCard={setNextActiveCard}
    />
  );
};

export default CardsContainer;
