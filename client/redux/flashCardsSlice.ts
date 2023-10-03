import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FlashCard, User } from "@/types/constants";

// Define a type for the slice state

// Define the initial state using that type
const initialState: FlashCard[] = [];

export const flashCardsSlice = createSlice({
  name: "flash cards",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setAllCards: (state, action: PayloadAction<FlashCard[]>) => {
      return state = action.payload;
    },
    addCards: (state, action: PayloadAction<FlashCard[]>) => {
      state = [...state, ...action.payload];
    },
    deleteCards: (state, action: PayloadAction<FlashCard[]>) => {
      const flashCardToDeleteIds = action.payload.map(cardToDelete => cardToDelete.id)
      state = state.filter((card) => !flashCardToDeleteIds.includes(card.id));
    },
  },
});

export const { setAllCards, addCards, deleteCards } = flashCardsSlice.actions;

export default flashCardsSlice.reducer;
