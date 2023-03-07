<template>
  <div class="home">
    <header>
      <div class="header__content">
        <div class="search">
          <img v-on:click="searchData" class="search__icon" src="../../assets/search.png" alt="search">
          <input v-model="search" v-on:keyup.enter="searchData" type="text" placeholder="Procurar Pókemon...">
        </div>
      </div>
    </header>

    <main>

      <div class="cards">
        <div v-for="pokemon in pokemons" :key="pokemon.id" class="cards__container">
          <div class="card__info">
            <span class="card_id">Nº{{ pokemon.id }}</span>
            <h2>{{ pokemon.name }}</h2>
            <div
              :style="`background-color: ${colors(type.type?.name).primary};`"
              class="" v-for="(type, j) in pokemon?.types" :key="j">
              {{ type.type?.name }}
            </div>
          </div>
          <div class="card__img">
            <div class="favorites">
              <img class="favo-heart" src="../../assets/PokeHeart.png">
            </div>
            <img class="flame__icon" src="../../assets/flame.png">
            <img class="pokemons__img" :src="pokemon?.sprites.front_default">
          </div>
        </div>
      </div>

    </main>

    <footer>
      <div class="navbar">

        <router-link to="" class="nav-buttons">
          <img src="../../assets/iconoir_pokeball.png">
          <h4>Pokedéx</h4>
        </router-link>

        <router-link to="/generations" class="nav-buttons">
          <img src="../../assets/PokePin.png">
        </router-link>


        <router-link to="/favorites" class="nav-buttons">
          <img src="../../assets/favorites.png">
        </router-link>

        <router-link to="/profile" class="nav-buttons">
          <img src="../../assets/profile.png">
        </router-link>

      </div>


    </footer>
  </div>
</template>

<script>
import { onMounted, ref, computed } from 'vue';
import { pokemonClient } from "../../api";
import { pokeTypeClient } from '../../api';
import { colors } from '../common/helpers';
export default {
  setup() {
    const pokemonsUrl = ref([]);
    const pokemons = ref([]);
    const pokemon = ref(null);
    const pokeType = ref([]);
    const search = ref("");
    const page = ref(1);


    async function searchData() {
      page.value = 1
      getPokemons()
    }

    function onClick(name) {
      console.log('onClick', name);
    }

    const pokemonsId = computed(() => {
      if (!pokemonsUrl.value.length) return [];
      return pokemonsUrl.value.map((poke) => poke.url.split('/').at(-2))
    })

    async function getPokemonsList() {
      // Un array de promesas
      // Guarda un promesa por cada id de pokemon [Promise<pokemon>, Promise<pokemon>]
      const promises = pokemonsId.value.map(async (id) => {
        const pokemon = await pokemonClient.getPokemon(id);
        return pokemon;
      });

      const resultPokemons = await Promise.allSettled(promises);


      pokemons.value = resultPokemons.map(pokemon => pokemon.value.data);
    }

    async function getPokemons() {
      const { data } = await pokemonClient.getPokemons({
        name: search.value,
        page: page.value,
      });
      pokemonsUrl.value = data.results;
      console.log(data)
    }

    async function getPoketypes() {
      const { data } = await pokeTypeClient.getPoketypes();
      pokeType.value = data.results;
    }

    async function init() {
      await getPokemons();
      await getPokemonsList();
      await getPoketypes();
    }

    init();


    return {
      pokemonsUrl,
      pokemon,
      pokemons,
      pokemonsId,
      pokeType,
      searchData,
      search,
      onClick,
      colors,
    }

  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

.search {
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 40px;

  @media screen and (min-width: 700px) {
    margin-top: 100px;
  }
}

input {
  border-radius: 50px;
  border: 2px solid var(--border-color);
  width: 230px;
  height: 40px;
  padding: 0px 50px 0px 50px;
  color: var(--input-text-color);

  &::placeholder {
    font-size: 16px;
    color: var(--input-text-color);
  }

  @media screen and (min-width: 700px) {
    width: 300px;
    height: 40px;
    padding: 0px 200px 0px 50px;
  }
}

.search__icon {
  position: absolute;
  top: 10px;
  left: 25px;
}

.cards {
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  gap: 20px;

  @media screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 80px;
    margin: 50px 0px;
  }
}

.cards__container {
  position: relative;
  display: flex;
  align-items: center;
  background: #FCF3EB;
  width: 330px;
  height: 130px;
  border-radius: 10px 0px 0px 10px;

  @media screen and (min-width: 700px) {
    width: 400px;
    height: 130px;
  }
}

.card__info {
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  gap: 10px;

  h2 {
    font-size: 25px;
  }

  @media screen and (min-width: 700px) {
    padding-left: 50px;
  }
}

.card_id {
  font-size: 18px;
}

.card__img {
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FF9D55;
  padding: 65px 80px;
  border-radius: 10px;
  z-index: 1;
}


.favorites {
  position: absolute;
  display: flex;
  justify-content: center;
  padding: 8px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 50px;
  border: 2px solid var(--white-color);
  top: 8px;
  right: 8px;
}

.favo-heart {
  width: 20px;
}

.pokemons__img {
  position: absolute;
  width: 100px;

  img {
    z-index: 10px;
  }
}

.flame__icon {
  position: absolute;
  width: 120px;

  img {
    z-index: 2;
  }
}

footer {
  display: flex;
  justify-content: center;
  border-top: 1px solid var(--border-color);
  background-color: #ffff;
  width: 100%;
  height: 80px;
}


.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
}

.nav-buttons {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: none;

  h4 {
    font-size: 13px;
    color: var(--icon-text-color);
    font-weight: 600;
  }
}
</style>