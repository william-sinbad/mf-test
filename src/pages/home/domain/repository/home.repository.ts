import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import HomeEntity from "../entity/home.entity";

export const toggleSidebarState: CaseReducer<
  HomeEntity,
  PayloadAction<boolean>
> = (state, { payload }) => {
  state.isSidebarOpen = payload;
};
