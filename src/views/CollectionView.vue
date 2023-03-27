<template>
  <div class="co container">
    <MenuComponent :setter="setter" index-active=2 :globalDatas="globalDatas"></MenuComponent>
    <DisplayerComponent v-on:refresh="refresh" :setter="setter" :numbers=230 :globalDatas="globalDatas"></DisplayerComponent>
  </div>
</template>

<script>

import DisplayerComponent from "@/components/Displayer.vue";
import MenuComponent from "@/components/Menu.vue";

export default {
  name: "CollectionView",
  components: {MenuComponent, DisplayerComponent},
  props: {
    globalDatas: Object,
    setter: Function
  },
  methods: {
    refresh() {
      this.$forceUpdate
    }
  }
}
</script>

<style scoped>
.co {
  display: flex;
  flex-direction: column;
}
</style>