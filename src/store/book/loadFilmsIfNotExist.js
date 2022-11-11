import { genreSlice, bookSlice } from "./index";
import { prepareData } from "../utils";
import { selectgenres } from "./selectors";

export const loadbooksIfNotExist = (genreId) => (dispatch, getState) => {
  // if (selectgenres(getState())?.length > 0) {
  //   return;
  // }

  dispatch(bookSlice.actions.startLoading());
  fetch(`http://localhost:3001/api/books?genreId=${genreId}`)
    .then((response) => response.json())
    .then((genres) => {
      dispatch(bookSlice.actions.successLoading(prepareData(genres)));
    })
    .catch(() => {
      dispatch(bookSlice.actions.failLoading());
    });
};
