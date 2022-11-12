import { bookSlice } from "./index";
import { prepareData } from "../utils";
import { selectBooks } from "./selectors";

export const loadBooksIfNotExist = (genreId) => (dispatch, getState) => {
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
