export const convertTypes = (types, allTypes) => {
  const nameTypes = types.map((idType) => {
    const result = allTypes.find((item) => item.id === idType);
    return result.name;
  });
  return nameTypes;
};

export const filterAllOption = (allPokemons, existing, nameTypes) => {
  let result = [];
  if (existing === "existing") {
    result = allPokemons.filter(
      (pokemon) =>
        !pokemon.db && pokemon.types.some((item) => nameTypes.includes(item))
    );
  } else if (existing === "created") {
    result = allPokemons.filter(
      (pokemon) =>
        pokemon.db && pokemon.types.some((item) => nameTypes.includes(item))
    );
  }
  return result;
};
export const filterByTypes = (allPokemons, nameTypes) => {
  const result = allPokemons.filter((pokemon) =>
    pokemon.types.some((item) => nameTypes.includes(item))
  );

  return result;
};
export const filterByExisting = (allPokemons, existing) => {
  if (existing === "existing") {
    return allPokemons.filter((pokemon) => !pokemon.db);
  } else if (existing === "created") {
    return allPokemons.filter((pokemon) => pokemon.db);
  }
};
