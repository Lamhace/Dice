import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playerScores: [0, 0],
  player1Active: true,
  player2Active: false,
};

const DiceSlice = createSlice({
  name: "DiceSlice",
  initialState,
  reducers: {
    rollDice: (state, action) => {
      if (
        state.playerScores[0] === 99 &&
        !state.player2Active &&
        action.payload === 1
      ) {
        state.playerScores[0] += action.payload;
      } else if (
        state.playerScores[1] === 99 &&
        !state.player1Active &&
        action.payload === 1
      ) {
        state.playerScores[1] += action.payload;
      }
      if (state.playerScores[0] === 100 || state.playerScores[1] === 100){
        return
      }
        if (state.player1Active) {
          if (
            action.payload !== 1 &&
            action.payload + state.playerScores[0] <= 100
          ) {
            state.playerScores[0] += action.payload;
          } else {
            state.player1Active = false;
            state.player2Active = true;
          }
        } else if (state.player2Active) {
          if (
            action.payload !== 1 &&
            action.payload + state.playerScores[1] <= 100
          ) {
            state.playerScores[1] += action.payload;
          } else {
            state.player1Active = true;
            state.player2Active = false;
          }
        }
    },
    resetGame: (state) => {
      state.playerScores = [0, 0];
      state.player1Active = true;
      state.player2Active = false;
    },
  },
});

export const { rollDice, resetGame } = DiceSlice.actions;
export default DiceSlice.reducer;
