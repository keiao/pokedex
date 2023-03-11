import { API } from "../instance/pokedexApi";

export const pokeTypeClient = {
  getPoketype(typeName) {
    return API.get(`type/${typeName}`);
  },
  getPoketypes(params) {
    return API.get("type", {
      params,
    });
  },
};