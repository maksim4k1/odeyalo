import { RootState } from "@/redux/store";
import { TestShortData, TestsState } from "./types";
import { StatusState } from "@/utils/stateCreators";

const selectTestsModule = (state: RootState): TestsState => {
  return state.testsReducer;
};

export const selectTests = (state: RootState): TestShortData[] => {
  return selectTestsModule(state).tests;
};

export const selectGetTestsState = (state: RootState): StatusState => {
  return selectTestsModule(state).getTestsState;
};

export const selectTestsByUserId = (state: RootState): TestShortData[] => {
  return selectTestsModule(state).testsByUserId;
};

export const selectGetTestsByUserIdState = (state: RootState): StatusState => {
  return selectTestsModule(state).getTestsByUserIdState;
};

export const selectGiveTestState = (state: RootState): StatusState => {
  return selectTestsModule(state).giveTestState;
};
