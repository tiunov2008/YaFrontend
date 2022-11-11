import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {genreSlice} from './genres/index'

export const store = configureStore({
    reducer: combineReducers({
        genre: genreSlice.reducer,
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

console.log(store.getState());