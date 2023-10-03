"use client";

import React, { useEffect, useState } from "react";
import CardBox from "../CardBox/CardBox";
import { getAllCards } from "@/helpers/flashcards";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { checkAuthenticated } from "@/helpers/auth";
import EmptyComponent from "../EmptyComponent/EmptyComponent";
import { FlashCard } from "@/types/constants";
import CustomSnackbar from "../CustomSnackbar/CustomSnackbar";

type Props = {};

const CardsContainer = (props: Props) => {
  const dispatch = useAppDispatch();
  const loggedUserState = useAppSelector((state) => state.loggedUser);
  const [allCards, setAllCards] = useState<FlashCard[]>([]);
  const [activeCard, setActiveCard] = useState<FlashCard | null>(null);
  const [snackBar, setSnackBar] = useState<{
    open: boolean;
    message: string;
    severity: null | "success" | "error" | "warning" | "info";
    action: React.ReactNode | null;
  }>({
    open: false,
    message: "",
    severity: null,
    action: null,
  });


  const handleGetAllCards = async () => {
    const allCards: FlashCard[] = await getAllCards();
    if (allCards.length > 0) {
      setAllCards(allCards);
      setActiveCard(allCards[0]);
    }
  };

  useEffect(() => {
    checkAuthenticated(dispatch);
  }, []);

  useEffect(() => {
    if (loggedUserState?.user?.email) {
      handleGetAllCards();
    }
  }, [loggedUserState.user?.email]);

  const setNextActiveCard = () => {
    const nextCard = selectRandomItem();
    if (nextCard) {
      setActiveCard(nextCard);
    }
  };
  const cardsListWithoutCurrent = allCards.filter(
    (card) => card.id !== activeCard?.id
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

  return activeCard && allCards.length > 0 ? (
    <>
      <CardBox
        key={activeCard.id}
        card={activeCard}
        setNextActiveCard={setNextActiveCard}
        disableNextBtn={allCards.length <= 1}
        setSnackBar={setSnackBar}
      />
      <CustomSnackbar snackBar={snackBar} setSnackBar={setSnackBar} />
    </>
  ) : (
    <EmptyComponent />
  );
};

export default CardsContainer;
