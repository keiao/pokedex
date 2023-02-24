<template>
  <div class="home">
    <header>
      <div class="header__content">
        <div class="search__bar">
          <img class="search__icon" src="../../assets/search.png" alt="search">
          <input type="text" placeholder="Procurar Pókemon...">
        </div>
      </div>
    </header>

    <main>


    </main>



    <footer>
      <div class="navbar">
        <div class="nav-icons">
          <img src="../../assets/iconoir_pokeball.png">
          <h4>Pokedéx</h4>
        </div>

        <div class="nav-icons">
          <img src="../../assets/PokePin.png">
        </div>

        <div class="nav-icons">
          <img src="../../assets/favorites.png">
        </div>

        <div class="nav-icons">
          <img src="../../assets/profile.png">
        </div>

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

.search__bar {
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

.nav-icons {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h4 {
    font-size: 13px;
    color: var(--icon-text-color);
    font-weight: 600;
  }
}
</style>