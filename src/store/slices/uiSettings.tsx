import { createSlice } from "@reduxjs/toolkit";

export const uiSettings = createSlice({
  name: "uiSettings",
  initialState: {
    theme: "light",
  },
  reducers: {
    themeSwitch: (state, action) => {
      state.theme = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const uiSettingsReducer = uiSettings.reducer;
export const { themeSwitch } = uiSettings.actions;
