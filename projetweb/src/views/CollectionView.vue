<template>
  <div class="co container">
    <MenuComponent index-active=2></MenuComponent>
    <DisplayerComponent :numbers=230></DisplayerComponent>
  </div>
</template>

<script>

import DisplayerComponent from "@/components/Displayer.vue";
import MenuComponent from "@/components/Menu.vue";

export default {
  name: "CollectionView",
  components: {MenuComponent, DisplayerComponent}
}
</script>

<style scoped>
.co {
  display: flex;
  flex-direction: column;
}
</style>