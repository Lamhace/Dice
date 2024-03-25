import { configureStore } from "@reduxjs/toolkit";
import DiceReducer from "./DiceSlice";

const store = configureStore({
  reducer: {
    Dice: DiceReducer,
  },
});

export default store;
