<template>
  <div class="home">
    <header>

    </header>

    <main>
      <div v-for="generation in generations" :key="generation.id">
        <pre>{{ generation.url }}</pre>
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
    const generationsUrl = ref([]);

    const generationId = computed(() => {
      if (!generationsUrl.value.length) return [];
      return generationsUrl.value.map((gene) => gene.url.split('/').at(-2))
    })


    async function getGenerationsList() {
      // Un array de promesas
      // Guarda un promesa por cada id de pokemon [Promise<pokemon>, Promise<pokemon>]
      const promises = generationId.value.map(async (id) => {
        const generation = await pokeGeneClient.getGeneration(id);
        return generation;
      });

      const resultGenerations = await Promise.allSettled(promises);


      generations.value = resultGenerations.map(generation => generation.value.data);
    }
   

    async function getGenerations() {
      const { data } = await pokeGeneClient.getGenerations();
      generations.value = data.results;
      console.log(data)
    }

    async function init() {
      await getGenerations();
      await getGenerationsList()
    }

    init();

    return {
      generation,
      generations,
      generationId,
      generationsUrl,
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


