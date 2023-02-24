import { API }  from "../instance/pokedéxApi";

export const characterClient = {
  getCharacter (id) {
    return API.get(`character/${id}`)
  },
  getCharacters (params) {
    return API.get('character', {
      params,
    })
  },
}
