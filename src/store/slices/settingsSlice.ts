import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SettingsState = {
  push: boolean;
  achievements: boolean;
  newObservations: boolean;
  cameraAccess: boolean;
  haptics: boolean;
  profileVisibility: boolean;
  geo: boolean;
  cloudSync: boolean;
  language: "ru" | "en";
};

const initialState: SettingsState = {
  push: true,
  achievements: true,
  newObservations: true,
  cameraAccess: true,
  haptics: true,
  profileVisibility: true,
  geo: true,
  cloudSync: false,
  language: "ru",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggle(state, action: PayloadAction<keyof SettingsState>) {
      const key = action.payload;
      if (typeof state[key] === "boolean") {
        // @ts-expect-error narrow to boolean via runtime check
        state[key] = !state[key];
      }
    },
    setLanguage(state, action: PayloadAction<"ru" | "en">) {
      state.language = action.payload;
    },
  },
});

export const { toggle, setLanguage } = settingsSlice.actions;
export default settingsSlice.reducer;
