<template>
  <div class="header-profile">
    <h3>The Collector</h3>
    <img class="logo-img" src="../assets/logo.png">
  </div>
  <div class="menu-container">
    <div class="profile">
      <div class="header-profile">
        <h3>The Collector</h3>
        <img class="logo-img" src="../assets/logo.png">
      </div>
      <div class="pp-menu">
        <img class="pp-img" src="../assets/user_pic.jpg">
        <h3>nkinesis</h3>
      </div>
      <div class="settings">
        <img class="gear-wheel" src="../assets/gear-wheel.png">
        <img class="flag-img" src="../assets/drapeau-france.png">
      </div>
    </div>
    <div class="navigate">
      <div class="button">
        <img class="pokeball-img" src="../assets/pokeball.png">
        <h3>Collections</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu2-Component',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.menu-container {
  height: 100%;
  width: 20%;
  background-image: url("@/assets/user_pic.jpg");
  background-size: 100% 100%;
  border-radius: 40px;
}
.profile {
  height: 30%;
  width: 20%;
}
.header-profile {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 14%;
  width: 20%;
  padding-left: 1%;
}
.logo-img {
  width: 35%;
}
.pp-menu {
  display: flex;
  height: 52%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 22%;
  margin-bottom: 3%;
}
.pp-img {
  display: flex;
  width: 35%;
  border-style: solid;
  border-width: thick;
  border-radius: 50px;
  margin-right: 5%;
}
.settings {
  height: 12%;
  display: flex;
  flex-direction: row;
  padding-bottom: 2%;
  justify-content: space-between;
  align-items: center;
}
.gear-wheel {
  width: 10%;
  height: 100%;
  margin-left: 5%;
}
.flag-img {
  border-style: solid;
  border-width: medium;
  border-radius: 50px;
  height: 100%;
  width: 10%;
  margin-right: 5%;
}
.button {
  height: 14%;
  border-radius: 50px;
  /*display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-style: solid;
  border-width: thick;
  */

}
.pokeball-img {
  margin-left: 5%;
  margin-right: 5%;
  width: 20%;
  height: 90%;

}

</style>
