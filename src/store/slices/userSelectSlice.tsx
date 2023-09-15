import { createSlice, createAction } from "@reduxjs/toolkit";
import { JobStatusEnum, CardEnum } from "../../types/enums";

export const getEligibility = createAction("app/getEligibility");

interface IUserSelect {
  name: string;
  salary: string;
  job: string;
  location: string;
  eligibility: CardEnum[];
}

const initialState: IUserSelect = {
  name: "",
  salary: "",
  job: "",
  location: "",
  eligibility: [],
};

export const userSelectSlice = createSlice({
  name: "userSelect",
  initialState,
  reducers: {
    fillForm: (state, action) => {
      state.name = action.payload.name;
      state.salary = action.payload.salary;
      state.job = action.payload.job;
      state.location = action.payload.location;
    },
    resetForm: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getEligibility, (state) => {
      if (state.job === JobStatusEnum.Student) {
        if (+state.salary! > 16000) {
          state.eligibility = [
            CardEnum.liquidCard,
            CardEnum.anywhereCard,
            CardEnum.studentCard,
          ];
        } else {
          state.eligibility = [CardEnum.studentCard, CardEnum.anywhereCard];
        }
      } else if (+state.salary! > 16000) {
        state.eligibility = [CardEnum.anywhereCard, CardEnum.liquidCard];
      } else {
        state.eligibility = [CardEnum.anywhereCard];
      }
    });
  },
});

export const { fillForm, resetForm } = userSelectSlice.actions;
export const userSelectSliceReducer = userSelectSlice.reducer;
