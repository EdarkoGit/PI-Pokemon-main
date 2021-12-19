import Card from "../components/Card/Card";

export const renderPokemons = (allPokemons) => {
  return (
    <section>
      {allPokemons.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          img={item.img}
          types={item.types}
        />
      ))}
    </section>
  );
};
