import { Statuses } from "../../constants/statuses";

export const selectBookModule = (state) => state.book;

export const selectBooks = (state) =>
  Object.values(selectBookModule(state).entities);

export const selectBookById = (state, bookId) =>
  console.log(state);

export const selectIsBooksLoading = (state) =>
  selectBookModule(state).status === Statuses.inProgress;
