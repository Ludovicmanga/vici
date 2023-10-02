import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type GeneralPropertiesState = {
    snackbar: {
        open: boolean,
        message: string,
        severity: null | 'success' | 'error' | 'warning' | 'info'
    }
}

const initialState: GeneralPropertiesState = {
    snackbar: {
        open: false,
        message: '',
        severity: null
    }
}

export const generalPropertiesSlice = createSlice({
  name: "general properties",
  initialState,
  reducers: {
    setSnackBarMessage: (state, action: PayloadAction<{ open: boolean, message: string; severity: null | 'success' | 'error' | 'warning' | 'info' }>) => {
        state.snackbar = {
            open: action.payload.open,
            message: action.payload.message,
            severity: action.payload.severity
        }
      },
  },
});

export const { setSnackBarMessage } = generalPropertiesSlice.actions;

export default generalPropertiesSlice.reducer;
