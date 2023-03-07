import { API } from "../instance/pokedexApi";

export const pokeGeneClient = {
  getGeneration(id) {
    return API.get(`generation/${id}`);
  },
  getGenerations(params) {
    return API.get("generation", {
      params,
    });
  },
};
