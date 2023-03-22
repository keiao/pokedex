<template>
  <div class="home">
    <header>
      <div class="favo">
        <h2>Regiões</h2>
      </div>
    </header>
    <main>
      <div class="pokere">
        <div class="pokere__content">
          <h3 class="title_region">kanto</h3>
          <span class="generation">1º Geração</span>
        </div>
        <div class="pokere__image">
          <img src="../../assets/regions/kanto/bulbasaur.png">
          <img src="../../assets/regions/kanto/charmander.png">
          <img src="../../assets/regions/kanto/squirtle.png">
        </div>
        <img src="../../assets/kanto.png">
      </div>

      <div class="pokere">
        <div class="pokere__content">
          <h3 class="title_region">Johto</h3>
          <span class="generation">Geração</span>
        </div>
        <div class="pokere__image">
          <img src="../../assets/regions/Johto/chikorita.png">
          <img src="../../assets/regions/Johto/cyndaquil.png">
          <img src="../../assets/regions/Johto/totodile.png">
        </div>
        <img src="../../assets/johto.png">
      </div>

      <div class="pokere">
        <div class="pokere__content">
          <h3 class="title_region">Hoenn</h3>
          <span class="generation">Geração</span>
        </div>
        <div class="pokere__image">
          <img src="../../assets/regions/Hoenn/treecko.png">
          <img src="../../assets/regions/Hoenn/torchic.png">
          <img src="../../assets/regions/Hoenn/mudkip.png">
        </div>
        <img src="../../assets/hoenn.png">
      </div>

      <div class="pokere">
        <div class="pokere__content">
          <h3 class="title_region">Sinnoh</h3>
          <span class="generation">Geração</span>
        </div>
        <div class="pokere__image">
          <img src="../../assets/regions/Sinnoh/turtwig.png">
          <img src="../../assets/regions/Sinnoh/chimchar.png">
          <img src="../../assets/regions/Sinnoh/piplup.png">
        </div>
        <img src="../../assets/sinnoh.png">
      </div>

      <div class="pokere">
        <div class="pokere__content">
          <h3 class="title_region">Unova</h3>
          <span class="generation">Geração</span>
        </div>
        <div class="pokere__image">
          <img src="../../assets/regions/Unova/snivy.png">
          <img src="../../assets/regions/Unova/tepig.png">
          <img src="../../assets/regions/Unova/oshawott.png">
        </div>
        <img src="../../assets/unova.png">
      </div>

      <div class="pokere">
        <div class="pokere__content">
          <h3 class="title_region">Kalos</h3>
          <span class="generation">Geração</span>
        </div>
        <div class="pokere__image">
          <img src="../../assets/regions/Kalos/chespin.png">
          <img src="../../assets/regions/Kalos/fennekin.png">
          <img src="../../assets/regions/Kalos/frogadier.png">
        </div>
        <img src="../../assets/kalos.png">
      </div>

      <div class="pokere">
        <div class="pokere__content">
          <h3 class="title_region">Alola</h3>
          <span class="generation">7º Geração</span>
        </div>
        <div class="pokere__image">
          <img src="../../assets/regions/Alola/rowlet.png">
          <img src="../../assets/regions/Alola/litten.png">
          <img src="../../assets/regions/Alola/popplio.png">
        </div>
        <img src="../../assets/alola.png">
      </div>

      <div class="pokere">
        <div class="pokere__content">
          <h3 class="title_region">Galar</h3>
          <span class="generation">Geração</span>
        </div>
        <div class="pokere__image">
          <img src="../../assets/regions/Galar/pansage.png">
          <img src="../../assets/regions/Galar/scorbunny.png">
          <img src="../../assets/regions/Galar/sobble.png">
        </div>
        <img src="../../assets/galar.png">
      </div>

    </main>

    <footer>
      <div class="navbar">
        <div class="navbar">
          <router-link to="/home" class="nav-buttons">
            <img src="../../assets/iconoir_poke.png">
          </router-link>

          <router-link to="" class="nav-buttons">
            <img src="../../assets/PokePinColor.png">
            <h4>Regiões</h4>
          </router-link>

          <router-link to="/favorites" class="nav-buttons">
            <img src="../../assets/favorites.png">
          </router-link>

          <router-link to="/profile" class="nav-buttons">
            <img src="../../assets/profile.png">
          </router-link>
        </div>
      </div>

    </footer>
  </div>
</template>

<script>
import { onMounted, ref, computed } from 'vue';
import { pokeGeneClient } from '../../api'
export default {
  setup() {
    const generations = ref([]);
    const generation = ref(null);


    async function getGenerations() {
      const { data } = await pokeGeneClient.getGenerations();
      generations.value = data.results;
      console.log(data)
    }

    async function init() {
      await getGenerations();

    }

    init();

    return {
      generation,
      generations,
    }

  }
}

</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
}

header {
  border-bottom: 1px solid var(--border-color);
  font-size: 18px;
  padding: 20px;
  font-weight: 600;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0px;
}

img {
  border-radius: 15px;
}
.pokere {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 5;
    border-radius: 15px;
  }
}

.pokere__content{
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  left: 20px;
  top: 30px;
  color: var(--white-color);
  z-index: 12;
}

.title_region{
  font-size: 20px;
}

.generation{
  font-size: 15px;
}

.pokere__image {
  position: absolute;
  z-index: 13;
  top: 25px;
  right: 10px;
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


