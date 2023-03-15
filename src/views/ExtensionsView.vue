<template>
  <div class="co container">
    <MenuComponent index-active="2"></MenuComponent>
    <div class="extension-box">
      <router-link to="/collection"><img class="extension-img" src="../assets/logo_collection/CZ_FR.png"></router-link>
      <router-link to="/collection"><img class="extension-img" src="../assets/logo_collection/CRE_FR.png"></router-link>

    </div>
  </div>
</template>

<script>
import MenuComponent from "@/components/Menu.vue";

export default {
  name: "ExtensionsView",
  components: {MenuComponent}
}
</script>

<style scoped>
.co {
  display: flex;
  flex-direction: column;
}
.extension-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10%;
  height: 100%;
  width: 100%;
}
.extension-img {
  width: 80%;
  height: 10%;
}
</style>