import { configureStore } from "@reduxjs/toolkit";
import uiSlaice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: { ui: uiSlaice.reducer, cart: cartSlice.reducer },
});
export default store;
