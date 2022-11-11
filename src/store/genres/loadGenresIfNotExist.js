import { genreSlice } from "../genres/index";
import { prepareData } from "../utils";
import { selectGenres } from "../genres/selectors";

export const loadGenresIfNotExist = (dispatch, getState) => {
  if (selectGenres(getState())?.length > 0) {
    return;
  }

  dispatch(genreSlice.actions.startLoading());
  fetch("http://localhost:3001/api/genres")
    .then((response) => response.json())
    .then((genres) => {
      dispatch(genreSlice.actions.successLoading(prepareData(genres)));
    })
    .catch(() => {
      dispatch(genreSlice.actions.failLoading());
    });
};
