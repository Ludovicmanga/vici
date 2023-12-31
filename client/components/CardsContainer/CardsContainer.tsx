"use client";

import React, { useEffect, useState } from "react";
import CardBox from "../CardBox/CardBox";
import { getAllCards } from "@/helpers/flashcards";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { checkAuthenticated } from "@/helpers/auth";
import EmptyComponent from "../EmptyComponent/EmptyComponent";
import { Category, FlashCard } from "@/types/constants";
import CustomSnackbar from "../CustomSnackbar/CustomSnackbar";
import styles from "./CardsContainer.module.scss";
import { Paper, Skeleton } from "@mui/material";
import FilterMenu from "../FilterMenu/FilterMenu";
import EmptySearch from "../EmptySearch/EmptySearch";

type Props = {};

const CardsContainer = (props: Props) => {
  const dispatch = useAppDispatch();
  const loggedUserState = useAppSelector((state) => state.loggedUser);
  const [isLoading, setIsLoading] = useState(true);
  const [allCards, setAllCards] = useState<FlashCard[]>([]);
  const [filteredCards, setFilteredCards] = useState<FlashCard[]>([]);
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
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const cardCategories = allCards.map((card) => card.category);

  const handleGetAllCards = async () => {
    const allCards: FlashCard[] = await getAllCards();
    if (allCards.length > 0) {
      setAllCards(allCards);
      setActiveCard(allCards[0]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setFilteredCards((currArray) => {
      if (selectedCategories.length > 0) {
        const itemReturned = allCards.filter((card) =>
          selectedCategories.map((cat) => cat.id).includes(card.category.id)
        );
        return itemReturned;
      } else {
        return allCards;
      }
    });
  }, [selectedCategories]);

  useEffect(() => {
    setNextActiveCard();
  }, [filteredCards]);

  useEffect(() => {
    checkAuthenticated(dispatch);
  }, []);

  useEffect(() => {
    setFilteredCards(allCards);
  }, [allCards]);

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
  const cardsListWithoutCurrent = filteredCards.filter(
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

  const handleGetUniqueCategories = cardCategories.reduce(
    (acc: Category[], item: Category) => {
      if (!acc.map((cat) => cat.id).includes(item.id)) {
        acc.push(item);
      }
      return acc;
    },
    []
  );

  return isLoading ? (
    <div className={styles.contentWrapper}>
      <div className={styles.filterSkeletonContainer}>
        <Skeleton
          width={"100%"}
          height={700}
          sx={{
            marginTop: -15,
          }}
        />
      </div>
      <div className={styles.cardsSkeletonContainer}>
        <Skeleton
          width={"100%"}
          height={700}
          sx={{
            marginTop: -15,
          }}
        />
      </div>
    </div>
  ) : activeCard && allCards.length > 0 ? (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <Paper elevation={11} className={styles.filterBox}>
          <FilterMenu
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            allCategories={handleGetUniqueCategories}
          />
        </Paper>
        <div className={styles.cardContainer}>
          {filteredCards.length > 0 ? (
            <CardBox
              key={activeCard.id}
              card={activeCard}
              setNextActiveCard={setNextActiveCard}
              disableNextBtn={filteredCards.length < 2}
              setSnackBar={setSnackBar}
            />
          ) : (
            <EmptySearch />
          )}
        </div>
      </div>
      <CustomSnackbar snackBar={snackBar} setSnackBar={setSnackBar} />
    </div>
  ) : (
    <EmptyComponent />
  );
};

export default CardsContainer;
