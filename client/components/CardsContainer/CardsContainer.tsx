"use client";

import React, { useEffect, useState } from "react";
import CardBox from "../CardBox/CardBox";
import { getAllCards } from "@/helpers/flashcards";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAllCards } from "@/redux/flashCardsSlice";
import { checkAuthenticated } from "@/helpers/auth";
import { redirect } from 'next/navigation';

type Props = {};

const CardsContainer = (props: Props) => {
  const dispatch = useAppDispatch();
  const cardsListState = useAppSelector((state) => state.flashCards);
  const loggedUserState = useAppSelector((state) => state.loggedUser);
  const [activeCard, setActiveCard] = useState(cardsListState[0]);

  const handleGetAllCards = async () => {
    const allCards = await getAllCards();
    if (allCards.length > 0) {
      dispatch(setAllCards(allCards));
    }
  };

  useEffect(() => {
    checkAuthenticated(dispatch);
  }, []);

  useEffect(() => {
    if (loggedUserState.user) {
      handleGetAllCards();
    }
  }, [loggedUserState.user]);

  const setNextActiveCard = () => {
    const nextCard = selectRandomItem();
    if (nextCard) {
      setActiveCard(nextCard);
    }
  };
  const cardsListWithoutCurrent = cardsListState.filter(
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

  return cardsListState.length > 0 ? (
      <CardBox
        key={activeCard.id}
        card={activeCard}
        setNextActiveCard={setNextActiveCard}
        disableNextBtn={cardsListState.length <= 1}
      />
    ) : (
      <div>No cards yet bro, <button onClick={() => redirect('/createCards')}>create some</button></div>
    );
  }

export default CardsContainer;
