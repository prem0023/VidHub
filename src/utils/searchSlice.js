import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchCache: {},
  },
  reducers: {
    addSearchResult: (state, action) => {
      state.searchCache = { ...state.searchCache, ...action.payload };
    },
  },
});

export default searchSlice.reducer;
export const { addSearchResult } = searchSlice.actions;
