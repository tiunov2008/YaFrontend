import { userSlice } from "./index";
import { prepareData } from "../utils";

export const loadUsersIfNotExist = (userId) => (dispatch, getState) => {
  dispatch(userSlice.actions.startLoading());
  fetch(`http://localhost:3001/api/users?usersId=${userId}`)
    .then((response) => response.json())
    .then((reviews) => {
      dispatch(userSlice.actions.successLoading(prepareData(reviews)));
    })
    .catch(() => {
      dispatch(userSlice.actions.failLoading());
    });
};
