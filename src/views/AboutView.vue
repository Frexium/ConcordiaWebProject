<template>
  <div class="co container">
    <MenuComponent index-active=4></MenuComponent>
    <DisplayerComponent :numbers=230></DisplayerComponent>
  </div>
</template>

<script>

import MenuComponent from "@/components/Menu.vue";

export default {
  name: "CollectionView",
  components: {MenuComponent}
}
</script>
