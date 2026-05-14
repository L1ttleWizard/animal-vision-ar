import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profile from "./slices/profileSlice";
import gallery from "./slices/gallerySlice";
import onboarding from "./slices/onboardingSlice";
import settings from "./slices/settingsSlice";

const rootReducer = combineReducers({ profile, gallery, onboarding, settings });

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState: preloadedState as RootState | undefined,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
