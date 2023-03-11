
<template>
  <div class="type__filter">
    <p>Todos os tipos</p>
    <ul>
      <li><span @click="onClick('normal')" class="buttonMain">normal</span></li>
      <li><span @click="onClick('water')" class="buttonMain">water</span></li>
      <li><span @click="onClick('fire')" class="buttonMain">fire</span></li>
      <li> <span @click="onClick('grass')" class="buttonMain">grass</span></li>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref, computed } from 'vue';
import { colors } from '../modules/common/helpers';
export default {
  setup(props, { emit }) {
    function onClick(name) {
      emit('select', name)
    }

    return {
      onClick,
      colors,
    }
  }
}
</script>

<style lang="scss" scoped>

.type__info {
  padding: 50px;
}
.buttonsNav {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.type__filter ul {
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
}

.type__filter a {
  display: block;
  padding: 20px;
  border-radius: 50px;
  text-decoration: none;
  color: #191C26;
  cursor: pointer;
}

.type__filter a:hover {
  border-radius: 10px 10px 0px 0px;
  position: static;
}

.type__filter span {
  display: block;
  padding: 20px;
  background-color: #F9B53C;
  text-decoration: none;
  color: #191C26;
  cursor: pointer;
}

.type__filter span:hover {
  background-color: #CC673B;
}

.type__filter ul li ul {
  display: none;
}

.type__filter ul li a:hover+ul,
.type__filter ul li ul:hover {
  display: block;
}
</style>