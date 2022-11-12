import { Statuses } from '../../constants/statuses';
export const selectReviewModule = (state) => state.user;

export const selectIsUsersSuccess = (state) =>
    selectReviewModule(state).status === Statuses.success;
    
export const selectUserById = (state, userId) =>
    selectReviewModule(state).entities[userId];
    
