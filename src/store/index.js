import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {genreSlice} from './genre/index'
import { bookSlice } from './book/index';
import { cartSlice } from './cart/index';
import { reviewSlice } from './review/index';
import { userSlice } from './user';

export const store = configureStore({
    reducer: combineReducers({
        genre: genreSlice.reducer,
        book: bookSlice.reducer,
        cart: cartSlice.reducer,
        review: reviewSlice.reducer,
        user: userSlice.reducer,
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

