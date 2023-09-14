import { createSlice } from "@reduxjs/toolkit";
import { ThemeTypes } from "../../types/types";
import { MuiThemeEnums } from "../../types/enums";

export interface IUiSettings {
  theme: ThemeTypes;
}

const initialState: IUiSettings = {
  theme: MuiThemeEnums.DARK,
};

export const uiSettings = createSlice({
  name: "uiSettings",
  initialState,
  reducers: {
    themeSwitch: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const uiSettingsReducer = uiSettings.reducer;
export const { themeSwitch } = uiSettings.actions;
