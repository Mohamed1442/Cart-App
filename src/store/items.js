import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    replaceCart: (state, action) => {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addItem: (state, action) => {
      state.totalQuantity++;

      const addedItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!addedItem) {
        state.items.push({
          ...action.payload,
          quantity: 1,
          total: action.payload.price,
        });
      }

      if (addedItem) {
        addedItem.quantity++;
        addedItem.total += addedItem.price;
      }
    },
    removeItem: (state, action) => {
      state.totalQuantity--;

      const removedItem = state.items.find(
        (item) => item.id === action.payload
      );
      const removedItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (removedItem.quantity > 1) {
        removedItem.quantity--;
        removedItem.total -= removedItem.price;
      } else {
        state.items.splice(removedItemIndex, 1);
      }
    },
  },
});

export const itemsActions = itemsSlice.actions;

export default itemsSlice.reducer;
