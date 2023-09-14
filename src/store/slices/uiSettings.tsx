import { createSlice } from "@reduxjs/toolkit";

export interface IUiSettings {
  theme: "dark" | "light";
}

const initialState: IUiSettings = {
  theme: "dark",
};

export const uiSettings = createSlice({
  name: "uiSettings",
  initialState,
  reducers: {
    themeSwitch: (state, action) => {
      state.theme = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const uiSettingsReducer = uiSettings.reducer;
export const { themeSwitch } = uiSettings.actions;
