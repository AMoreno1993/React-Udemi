import { heroes } from "../data/heroes";

export const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

//console.log(getHeroeById(2));

//Con el valor (owner) filtra toda la lista de heroes
// y selecciona el que coincida con cada heroe
export const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);

//console.log(getHeroesByOwner(`DC`));
