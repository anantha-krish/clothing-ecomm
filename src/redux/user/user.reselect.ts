import { createSelector } from "reselect";
import { RootState } from "../store";

export const selectUser = (state: RootState) => state.user;
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
