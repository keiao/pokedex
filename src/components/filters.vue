<template>
  <n-button class="modal-button" round :color="pokeType ? colors(pokeType).primary : 'black'" @click="getPoketypes">
    {{ pokeType ? pokeType : 'Todos los tipos' }}
  </n-button>

  <n-modal v-model:show="showModal" preset="card">
    <template #header>
      <h3>Seleccione el tipo</h3>
    </template>
    <div class="modal-content">
      <div class="modal-buttons">
        <n-button color="black" class="modal-button" round @click="onPokeType('')">
          Mostrar todos
        </n-button>
        <n-button v-for="(type, index) in pokeTypes" :key="index" :color="colors(type?.name).primary" class="modal-button"
          round @click="$emit('change', type.name)">
          {{ type.name }}
        </n-button>
      </div>
    </div>
  </n-modal>
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
  setup() {
    const loading = ref(false);
    const pokeTypes = ref([]);
    const pokeType = ref('');
    const showModal = ref(false);


    async function getPoketypes() {
      const { data } = await pokeTypeClient.getPoketypes();
      showModal.value = !showModal.value;
      pokeTypes.value = data.results
    }






    return {
      colors,
      showModal,
      pokeTypes,
      getPoketypes,
      pokeType,
    }

  }
}
</script>

<style lang="scss" scoped>
n-modal {
  max-width: 500px;
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
</style>