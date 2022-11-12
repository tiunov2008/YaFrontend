import { Statuses } from './../../constants/statuses';
export const selectReviewModule = (state) => state.review;

export const selectIsReviewsSuccess = (state) =>
    selectReviewModule(state).status === Statuses.success;
export const selectReviewById = (state, reviewId) =>
    selectReviewModule(state).entities[reviewId];
