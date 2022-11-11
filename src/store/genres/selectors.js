import { Statuses } from './../../constants/statuses';
export const selectGenreModule = (state) => state.genre;

export const selectGenres = (state) => Object.values(selectGenreModule(state).entities);

export const selectIsGenresSuccess = (state) =>
    selectGenreModule(state).status === Statuses.success;

export const selectGenreById = (state, genreId) =>
    selectGenreModule(state).entities[genreId];

export const selectGenresBookIds = (state, genreId) =>
    selectGenreModule(state).entities[genreId].books;