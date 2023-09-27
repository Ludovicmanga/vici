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
      state = action.payload;
    },
  },
});

export const { setAllCards } = flashCardsSlice.actions;

export default flashCardsSlice.reducer;
