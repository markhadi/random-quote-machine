"use client";

import { createSlice } from "@reduxjs/toolkit";

const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    quote: "",
    author: "",
    backgroundColor: "",
    isLoading: true,
  },
  reducers: {
    setQuote: (state, action) => {
      state.quote = action.payload;
    },
    setAuthor: (state, action) => {
      state.author = action.payload;
    },
    setBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setQuote, setAuthor, setBackgroundColor, setIsLoading } =
  quotesSlice.actions;

export default quotesSlice.reducer;
