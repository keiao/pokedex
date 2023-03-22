<template>
  <div class="filter">
    <n-button class="modal-button" round :color="pokeType ? colors(pokeType).primary : 'black'" @click="getPoketypes">
      {{ pokeType ? pokeType : 'Todos los tipos' }}
    </n-button>
  
    <n-modal v-model:show="showModal" class="filter-modal" preset="card">
      <template #header>
        <h3>Seleccione el tipo</h3>
      </template>
      <div class="modal-content">
        <div class="modal-buttons">
          <n-button color="black" class="modal-button" round @click="onSelect('')">
            Mostrar todos
          </n-button>
          <n-button
            v-for="(type, index) in pokeTypes"
            :key="index"
            :color="colors(type?.name).primary"
            class="modal-button"
            round
            @click="onSelect(type.name)">
            {{ type.name }}
          </n-button>
        </div>
      </div>
    </n-modal>
  </div>
</template>

<script>
import { ref } from 'vue';
import { pokeTypeClient } from "../api";
import { colors } from '../modules/common/helpers';
import { NButton, NModal, NCard, NSkeleton } from 'naive-ui'


export default {
  components: {
    NButton,
    NModal,
    NCard,
    NSkeleton,
  },
  setup(_, { emit }) {
    const pokeTypes = ref([]);
    const pokeType = ref('');
    const showModal = ref(false);

    async function getPoketypes() {
      const { data } = await pokeTypeClient.getPoketypes();
      showModal.value = !showModal.value;
      pokeTypes.value = data.results
    }

    function onSelect (pokemon) {
      showModal.value = false;
      emit('change', pokemon)
    }

    return {
      colors,
      showModal,
      pokeTypes,
      getPoketypes,
      pokeType,
      onSelect,
    }

  }
}
</script>


<style lang="scss" >
.filter-modal {
  width: 400px;
  margin: 20px auto;
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
}

</style>