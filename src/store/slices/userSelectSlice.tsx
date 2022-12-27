import { createSlice, createAction } from "@reduxjs/toolkit";
import { JobStatusEnum, CardEnum } from "../../enums";

// @ts-ignore
const localStoreData = JSON.parse(localStorage.getItem("userSelect")) || {};
export const getEligibility = createAction("app/getEligibility");

export const userSelectSlice = createSlice({
  name: "userSelect",
  initialState: {
    name: localStoreData?.name || "",
    salary: localStoreData?.salary || "",
    job: localStoreData?.job || "",
    location: localStoreData?.location || "",
    eligibility: localStoreData?.eligibility || [],
  },
  reducers: {
    fillForm: (state, action) => {
      state.name = action.payload.name;
      state.salary = action.payload.salary;
      state.job = action.payload.job;
      state.location = action.payload.location;

      localStorage.setItem(
        "userSelect",
        JSON.stringify({
          name: action.payload.name,
          salary: action.payload.salary,
          job: action.payload.job,
          location: action.payload.location,
        })
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getEligibility, (state, action) => {
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

      localStorage.setItem(
        "userSelect",
        JSON.stringify({
          ...state,
          eligibility: state.eligibility,
        })
      );
    });
  },
});

export const { fillForm } = userSelectSlice.actions;
export const userSelectSliceReducer = userSelectSlice.reducer;
