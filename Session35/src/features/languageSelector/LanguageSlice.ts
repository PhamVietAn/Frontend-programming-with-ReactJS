
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Language = "en" | "vi";

interface LanguageState {
  current: Language;
}

const initialState: LanguageState = {
  current: "en", 
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.current = action.payload;
    },
    toggleLanguage: (state) => {
      state.current = state.current === "en" ? "vi" : "en";
    },
  },
});

export const { setLanguage, toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;