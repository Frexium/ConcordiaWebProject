<template>
<div class="menu-container">

    <div class="menu-profile">
      <div class="menu-degrade">
        <div class="menu-profile-header">
<!--          <img class="menu-wheel-img" src="../assets/gear-wheel.png">-->
        </div>
        <div class="menu-profile-footer">
          <h5 class="menu-profile-nickname">nkinesis</h5>
          <img class="menu-profile-flag" src="../assets/drapeau-france.png">
          <h5 class="menu-profile-id">#1</h5>
        </div>
      </div>
    </div>
  <div class="menu-left">
    <div class="menu-header">
      <h1 class="menu-main-title">The Collector</h1>
      <img src="../assets/logo.png">
    </div>
    <div class="menu-nav">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link v-if="indexActive == 1" class="nav-link active" to="/">Homepage</router-link>
          <router-link v-else class="nav-link" to="/">Homepage</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="indexActive == 2" class="nav-link active" to="/extensions">Collections</router-link>
          <router-link v-else class="nav-link" to="/extensions">Collections</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="indexActive == 3" class="nav-link active" to="/network">Network</router-link>
          <router-link v-else class="nav-link" to="/network">Network</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="indexActive == 4" class="nav-link active" to="/about">About Us</router-link>
          <router-link v-else class="nav-link" to="/about">About Us</router-link>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Menu-Component',
  props: {
    indexActive: Number,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu-container {
  margin-top: 3%;
  height: 10%;
  flex: 1;
  display: flex;
  flex-direction: row;
}
.menu-profile {
  background-image: url("@/assets/pp/user_pic.jpg");
  background-size: 100% 100%;
  height: 20vh;
  width: 20vh;
}
.menu-degrade {
  background-image: url("@/assets/degrade.png");
  background-size: 100% 56%;
  background-repeat: no-repeat;
  background-position: bottom;
  opacity: 0.8;
  height: 100%;
  width: 100%;
}
.menu-profile-header {
  height: 15%;
  display: flex;
  flex-direction: row;
  justify-content: right;
}
.menu-wheel-img {
  width: 15%;
  margin-right: 5%;
  background-color: white;
}
.menu-profile-footer {
  margin-top: 70%;
  height: 15%;
  display: flex;
  flex-direction: row;
  margin-left: 5%;
  color: white;
  align-items: center;
}
.menu-profile-flag {
  width: 15%;
  height: 100%;
  margin-right: 5%;
  margin-left: 5%;
  margin-bottom: 5%;
}
.menu-left {
  height: 20vh;
  display: flex;
  flex-direction: column;
}
.menu-header {
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.menu-nav {
  height: 50%;
  width: 100%;
  align-items: center;
  margin-left: 5%;
  margin-top: 3%
}
.menu-main-title {
  margin-top: 3%;
}
</style>
