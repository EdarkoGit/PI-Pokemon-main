export const pokemonsSort = (array, key, desc) => {
  const copyArray = [...array];
  return copyArray.sort((a, b) => {
    if (a[key] < b[key]) return desc ? 1 : -1;
    if (a[key] > b[key]) return desc ? -1 : 1;
    return 0;
  });
};
