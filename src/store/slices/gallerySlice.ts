import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AnimalId } from "@/data/animals";

export type GalleryState = {
  unlocked: AnimalId[];
};

const initialState: GalleryState = {
  unlocked: ["cat", "dog"],
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    unlockAnimal(state, action: PayloadAction<AnimalId>) {
      if (!state.unlocked.includes(action.payload)) {
        state.unlocked.push(action.payload);
      }
    },
  },
});

export const { unlockAnimal } = gallerySlice.actions;
export default gallerySlice.reducer;
