import { selectBookById } from './../book/selectors';
export const selectCartModule = (state) => state.cart;

export const selectBookCount = (state, bookId) =>
  selectCartModule(state)[bookId];

export const getCart = (state) =>
  selectCartModule(state);

export const getAllBooks  = (state) => {
  let entities = Object.entries(selectCartModule(state))
  let books = [];
  entities.forEach((elem)=>{
    books.push(selectBookById(state, elem[0]));
  })
  return books
}

export const getPriceAllBooks  = (state) => {
  let books = getAllBooks(state);
  let total = 0;
  books.forEach(val => {
    total += val.price * selectBookCount(state, val.id);
  });
  return total;
}