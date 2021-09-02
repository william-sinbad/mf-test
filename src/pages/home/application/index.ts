import HomeEntity, { homeComponentStateKey } from "@home/entity/home.entity";
import { toggleSidebarState } from "@home/repository/home.repository";
import {
  configureStore,
  createDraftSafeSelector,
  createSlice,
} from "@reduxjs/toolkit";

const initialState: HomeEntity = {
  isSidebarOpen: true,
};

/** NOTE
 * createSlice
 * https://redux-toolkit.js.org/api/createSlice#createslice
 */
const homeSlice = createSlice({
  name: homeComponentStateKey,
  initialState,
  reducers: {
    toggleSidebarState,
  },
});

export const homeReducer = homeSlice.reducer;

export const { actions: homeActions } = homeSlice;

const store = configureStore({
  reducer: {
    [homeComponentStateKey]: homeReducer,
  },
  devTools: {
    name: "[SSC] MF Test - Home",
  },
});

export default store;

/** NOTE
 * https://redux-toolkit.js.org/tutorials/typescript#define-root-state-and-dispatch-types
 */
type RootState = ReturnType<typeof store.getState>;

/** NOTE
 * createSelector
 * https://redux-toolkit.js.org/api/createSelector#createdraftsafeselector
 */
const homeComponentState = (state: RootState) => state[homeComponentStateKey];

export const selectIsSidebarOpen = createDraftSafeSelector(
  homeComponentState,
  (state) => state.isSidebarOpen
);
