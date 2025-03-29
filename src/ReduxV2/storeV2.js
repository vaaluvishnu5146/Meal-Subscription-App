import { configureStore } from "@reduxjs/toolkit";
// ROOT REDUCER
import ServicesReducer from "./Slices/Services.slice";
import SubscriptionsReducer from "./Slices/Subscriptions.slice";
import CartReducer from "./Slices/Cart.slice";



export default configureStore({
  reducer: {
    servicesReducer: ServicesReducer,
    subscriptionsReducer: SubscriptionsReducer,
    cartReducer: CartReducer
  },
});
