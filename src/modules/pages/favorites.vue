<template>
  <div class="home">
    <header>
      <div class="favo">
        <h2>Favoritos</h2>
      </div>
    </header>
    <main>
      <div>
        <img src="../../assets/magikarp_empty.png" >
      </div>
        <h1>Você não favoritou nenhum Pokémon :( </h1>
        <p>Clique no ícone de coração dos seus pokémons favoritos e eles aparecerão aqui.</p>
    </main>

    <footer>
      <div class="navbar">
        <router-link to="/home" class="nav-buttons">
          <img src="../../assets/iconoir_poke.png">
        </router-link>

        <router-link to="/generations" class="nav-buttons">
          <img src="../../assets/PokePin.png">
        </router-link>

        <router-link to="" class="nav-buttons">
          <img src="../../assets/favoriteColor.png">
          <h4>Favoritos</h4>
        </router-link>

        <router-link to="/profile" class="nav-buttons">
          <img src="../../assets/profile.png">
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
.home{
  min-height: 100vh;
}

header{
  border-bottom: 1px solid var(--border-color);
  font-size: 18px;
  padding: 20px;
  font-weight: 600;
}

main{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 100px 0px;
  line-height: 1.2;
}

h1 {
  font-size: 23px;
  margin-bottom: 10px;
  font-weight: 500;
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


