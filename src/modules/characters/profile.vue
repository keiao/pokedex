<template>
  <div class="home">
    <header>

    </header>

    <main>



    </main>

    <footer>
      <div class="navbar">
        <router-link to="/home" class="nav-buttons">
          <img src="../../assets/iconoir_poke.png">
        </router-link>

        <router-link to="/generations" class="nav-buttons">
          <img src="../../assets/PokePin.png">
        </router-link>

        <router-link to="/favorites" class="nav-buttons">
          <img src="../../assets/favorites.png">
        </router-link>

        <router-link to="" class="nav-buttons">
          <img src="../../assets/profileColor.png">
          <h4>Conta</h4>
        </router-link>
      </div>


    </footer>
  </div>
</template>

<script>
export default {

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


