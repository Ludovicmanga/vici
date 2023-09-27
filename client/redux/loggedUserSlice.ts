import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types/constants";

const initialState: {
  user: User | null;
} = {
  user: null
}
export const userSlice = createSlice({
  name: "logged user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{
      user: User | null;
    }>) => {
      return state = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
