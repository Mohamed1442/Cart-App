import { createSlice } from "@reduxjs/toolkit";

const initialState = { toggle: false, notification: null };

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggle(state) {
      state.toggle = !state.toggle;
    },

    showNotification: (state, action) => {
      state.notification = action.payload;
    },
  },
});

export const toggleActions = toggleSlice.actions;

export default toggleSlice.reducer;
