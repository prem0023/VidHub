import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    toggleFlag: true,
  },

  reducers: {
    toggle: (state) => {
      state.toggleFlag = !state.toggleFlag;
    },
    closeToggle: (state) => {
      state.toggleFlag = false;
    },
  },
});

export default appSlice.reducer;
export const { toggle, closeToggle } = appSlice.actions;
