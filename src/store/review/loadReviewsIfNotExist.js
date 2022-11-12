import { reviewSlice } from "./index";
import { prepareData } from "../utils";

export const loadReviewsIfNotExist = (bookId) => (dispatch, getState) => {
  dispatch(reviewSlice.actions.startLoading());
  fetch(`http://localhost:3001/api/reviews?reviewsId=${bookId}`)
    .then((response) => response.json())
    .then((books) => {
      dispatch(reviewSlice.actions.successLoading(prepareData(books)));
    })
    .catch(() => {
      dispatch(reviewSlice.actions.failLoading());
    });
};
