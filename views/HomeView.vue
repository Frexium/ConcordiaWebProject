<template>
  <div class="co container">
    <MenuComponent index-active=1></MenuComponent>
<!--    <div class="extension-box">-->
<!--      <img class="extension-img" src="../assets/CZ_FR.png">-->
<!--      <img class="extension-img" src="../assets/CRE_FR.png">-->
<!--    </div>-->
<!--    <DisplayerComponent numbers="233"></DisplayerComponent>-->
  </div>
</template>

<script>
// @ is an alias to /src


import MenuComponent from "@/components/Menu.vue";

export default {
  name: 'HomeView',
  components: {MenuComponent},
  data () {
    return {

    }
  },
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
  justify-content: space-around;
  align-items: center;
  margin-top: 10%;
}
.extension-img {
  width: 30%;
  height: 10%;
}
</style>
