export const selectGenreModule = (state) => state.genre;

export const selectGenres = (state) => Object.keys(selectGenreModule(state).entities);
