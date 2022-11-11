export const selectCartModule = (state) => state.cart;

export const selectbookCount = (state, bookId) =>
  selectCartModule(state)[bookId];
