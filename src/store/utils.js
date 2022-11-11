export const prepareData = (items) => {
  return {
    entities: items.reduce((acc, genre) => {
      acc[genre.id] = genre;
      return acc;
    }, {}),
    ids: items.map(({ id }) => id),
  };
};
