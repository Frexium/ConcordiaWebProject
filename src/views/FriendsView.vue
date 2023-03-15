<template>
  <div class="co container">
    <MenuComponent index-active=3></MenuComponent>
    <div  class="user-container col-sm-6 col-md-4 col-lg-2 mb-3">
      <DisplayUser image="psy" alt="This is a profile picture" name="The Psy" twitter="ThePsy69"></DisplayUser>
    </div>
  </div>
</template>

<script>
import DisplayUser from "@/components/DisplayUser.vue";
import MenuComponent from "@/components/Menu.vue";

export default {
  name: "FriendsView",
  components: {MenuComponent, DisplayUser}
}
</script>

<style scoped>
.co {
  display: flex;
  flex-direction: column;
}
.user-container {
  margin-top: 5%;
}
</style>