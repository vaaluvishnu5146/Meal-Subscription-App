import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    data: []
  },
  reducers: {
    saveItemToCart: (state, action) => {
      if (action.payload) {
        state.data.push(action.payload);
      }
    }
  }
});

// Export the reducer to create ROOT REDUCER in STORE
export default CartSlice.reducer;

// Action creators are generated for each case reducer function
export const { saveItemToCart } = CartSlice.actions;