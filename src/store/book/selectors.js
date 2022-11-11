import { Statuses } from "../../constants/statuses";

export const selectbookModule = (state) => state.book;

export const selectbooks = (state) =>
  Object.values(selectbookModule(state).entities);

export const selectbookById = (state, bookId) =>
  selectbookModule(state).entities[bookId];

export const selectIsbooksLoading = (state) =>
  selectbookModule(state).status === Statuses.inProgress;
