import { API } from "../instance/pokedexApi";

export const pokemonClient = {
  getPokemon(id) {
    return API.get(`pokemon/${id}`);
  },
  getPokemons(params) {
    return API.get("pokemon", {
      params,
    });
  },
};
