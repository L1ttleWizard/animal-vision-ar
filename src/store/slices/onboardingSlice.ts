import { createSlice } from "@reduxjs/toolkit";

export type OnboardingState = {
  completed: boolean;
  step: number;
};

const initialState: OnboardingState = {
  completed: false,
  step: 0,
};

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    nextStep(state) {
      state.step += 1;
    },
    complete(state) {
      state.completed = true;
    },
    reset(state) {
      state.completed = false;
      state.step = 0;
    },
  },
});

export const { nextStep, complete, reset } = onboardingSlice.actions;
export default onboardingSlice.reducer;
