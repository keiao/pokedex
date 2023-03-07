import { API } from "../instance/pokedexApi";

export const pokeTypeClient = {
  getPoketype(id) {
    return API.get(`type/${id}`);
  },
  getPoketypes(params) {
    return API.get("type", {
      params,
    });
  },
};