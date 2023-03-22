<template>
  <div class="home">
    <div class="home_content">
      <header class="search">
        <img v-on:click="searchData" class="search__icon" src="../../assets/search.png" alt="search">
        <input v-model="search" v-on:keyup.enter="searchData" type="text" placeholder="Buscar Pókemon...">
      </header>
  
      <main>
        <filters @change="onSelectType" />
  
        <div class="" v-if="loading">
          <div class="cards">
            <n-skeleton v-for="index in Array.from({ length: 5 })" :key="index" height="80px" :sharp="false" />
          </div>
        </div>

        <div v-else class="cards">
          <div
            v-for="pokemon in pokemons"
            :key="pokemon.id"
            :style="`background-color: ${colors(pokemon.types[0].type?.name).secondary};`"
            class="cards__container">
            <div class="card__info">
              <span class="card_id">Nº {{ String(pokemon?.id).padStart(3, '0') }}</span>
              <h2>{{ pokemon.name }}</h2>
              <div class="type__container">
                <div
                  v-for="(type, j) in pokemon?.types"
                  :key="j"
                  class="type__info"
                  :style="`background-color: ${colors(type.type?.name).primary};`"
                >
                  <div class="circle_icon">
                    <img :src="getDynamicImage(type.type?.name)">
                  </div>
                  <span>{{ type.type?.name }}</span>
                </div>
              </div>
            </div>
  
            <div :style="`background-color: ${colors(pokemon.types[0].type?.name).primary};`" class="card__img">
              <div class="favorites">
                <img class="favo-heart" src="../../assets/PokeHeart.png">
              </div>
              <img class="bg-icon" :src="getDynamicImage(`bg-${pokemon.types[0].type?.name}`)">
              <img class="pokemons__img" :src="pokemon?.sprites.front_default">
            </div>
          </div>
        </div>
  
  
        <nav class="pagination" v-if="!loading">
          <button class="buttons__pagination" v-on:click="prevPage">Anterior</button>
          <a class="page__numeration">{{ page }}</a>
          <button class="buttons__pagination" v-on:click="nextPage">Siguiente</button>
        </nav>
  
  
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
  </div>
</template>

<script>
import { onMounted, ref, computed } from 'vue';
import { pokemonClient, pokeTypeClient } from "../../api";
import { colors } from '../common/helpers';
import { NButton, NModal, NCard, NSkeleton } from 'naive-ui'
import filters from '../../components/filters.vue'


export default {
  components: {
    filters,
    NButton,
    NModal,
    NCard,
    NSkeleton,
  },
  setup() {
    const loading = ref(false);
    const pokemonsUrl = ref([]);
    const pokemons = ref([]);
    const pokemon = ref(null);
    const pokeTypes = ref([]);
    const pokeType = ref('');
    const search = ref("");
    const page = ref(1);
    const pages = ref(1);

    async function onSelectType(name) {
      pokeType.value = name;
      if (name) {
        try {
          loading.value = true;
          const { data } = await pokeTypeClient.getPoketype(name);
          const pokeResultType = data.pokemon.map(pokemon => pokemon.pokemon);
          pokemonsUrl.value = pokeResultType;
          await getPokemonsList();
        } finally {
          loading.value = false;
        }
      } else {
        await getPokemons();
      }
    }

    function prevPage() {
      if (page.value > 1) {
        page.value -= 1;
      }
    };

    function nextPage() {
      if (page.value < pages.value) {
        page.value += 1;
      }
    };

    async function searchData() {
      page.value = 1
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

    async function getPokemonsUrl(type = '') {
      const { data } = await pokemonClient.getPokemons({
        type,
      });
      pokemonsUrl.value = data.results;
    }



    async function getPokemons() {
      try {
        loading.value = true;
        await getPokemonsUrl();
        await getPokemonsList();
      } finally {
        loading.value = false;
      }
    }

    getPokemons();

    function getDynamicImage (name) {
      const url =  new URL(`../../assets/${name}.png`, import.meta.url).href;

      if (url.split('/').at(-1) === 'undefined') {
        return new URL(`../../assets/bg-water.png`, import.meta.url).href;
      }

      return url;
    }


    return {
      pokemonsUrl,
      pokemon,
      pokemons,
      pokemonsId,
      searchData,
      search,
      onClick,
      page,
      pages,
      nextPage,
      prevPage,
      colors,
      pokeTypes,
      pokeType,
      loading,
      onSelectType,
      getDynamicImage,
    }

  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  padding: 100px 0;
}


.home_content {
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  justify-content: space-between;
}

.modal-content {
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.modal-buttons {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.modal-button {
  text-transform: capitalize;
}

.search {
  display: flex;
  align-items: center;
  position: relative;
  input {
    border-radius: 50px;
    border: 2px solid var(--border-color);
    width: 100%;
    height: 40px;
    padding: 0px 50px 0px 50px;
    color: var(--input-text-color);
  
    &::placeholder {
      font-size: 16px;
      color: var(--input-text-color);
    }
  
    @media screen and (min-width: 700px) {
      height: 40px;
      padding: 0px 200px 0px 50px;
    }
  }
}

.search__icon {
  position: absolute;
  top: 10px;
  left: 25px;
}

main {
  flex: 1;
  padding-top: 20px;
  width: 100%;
}

.cards {
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  gap: 20px;
  h2 {
    text-transform: capitalize;
  }
}

.cards__container {
  position: relative;
  display: flex;
  justify-content: space-between;
  background: #FCF3EB;
  width: 330px;
  height: 130px;
  border-radius: 10px;

  @media screen and (min-width: 700px) {
    width: 400px;
    height: 130px;
  }
}

.card__info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
  gap: 10px;
  flex: 1;
  h2 {
    font-size: 25px;
  }

  @media screen and (min-width: 700px) {
    padding-left: 20px;
  }
}

.card_id {
  font-size: 15px;
}

.card__img {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FF9D55;
  width: 130px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
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

.bg-icon {
  position: absolute;
  height: 90%;
}

.type__container {
  display: flex;
  gap: 5px;
}

.type__info {
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 50px;
  padding: 5px 8px;
  span {
    text-transform: capitalize;
  }
}

.circle_icon {
  box-sizing: border-box;
  background: var(--white-color);
  border-radius: 50%;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 13px;
  }
}


.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding: 0;
  margin-bottom: 20px;
  width: 100%;
}

.buttons__pagination {
  background: var(--icon-text-color);
  border-radius: 50px;
  width: 100px;
  height: 35px;
  color: var(--white-color);
  border: none;
  cursor: pointer;
}

.page__numeration {
  font-size: 20px;
  color: var(--white-color);
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