<template>
  <div class="co container">
    <MenuComponent :setter="setter" index-active="2" :globalDatas="globalDatas"></MenuComponent>
    <div class="extension-box">
      <router-link  to="/collection/2"><img class="extension-img" src="../assets/logo_collection/CZ_FR.png"></router-link>
      <router-link to="/collection/1"><img class="extension-img" src="../assets/logo_collection/CRE_FR.png"></router-link>

    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-mutating-props */
import MenuComponent from "@/components/Menu.vue";

export default {
  name: "ExtensionsView",
  components: {MenuComponent},
  props: {
    globalDatas: Object,
    setter: Function
  },
  data () {
    return {
      id: Number,
    }
  },
  methods : {
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