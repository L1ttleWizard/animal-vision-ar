import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Profile = {
  name: string;
  rank: string;
  caption: string;
  level: number;
  xp: number;
  xpToNext: number;
  coins: number;
  achievementsDone: number;
  achievementsTotal: number;
  friends: number;
  observations: number;
  favorites: number;
};

const initialState: Profile = {
  name: "Александр",
  rank: "Следопыт",
  caption: "Любитель природы",
  level: 12,
  xp: 850,
  xpToNext: 1200,
  coins: 320,
  achievementsDone: 18,
  achievementsTotal: 36,
  friends: 24,
  observations: 87,
  favorites: 12,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addCoins(state, action: PayloadAction<number>) {
      state.coins += action.payload;
    },
    spendCoins(state, action: PayloadAction<number>) {
      state.coins = Math.max(0, state.coins - action.payload);
    },
    addXp(state, action: PayloadAction<number>) {
      state.xp += action.payload;
      while (state.xp >= state.xpToNext) {
        state.xp -= state.xpToNext;
        state.level += 1;
        state.xpToNext = Math.round(state.xpToNext * 1.15);
      }
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const { addCoins, spendCoins, addXp, setName } = profileSlice.actions;
export default profileSlice.reducer;
