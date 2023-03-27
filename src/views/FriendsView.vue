<template>
  <div class="co container">
    <MenuComponent :setter="setter" index-active=3 :globalDatas="globalDatas"></MenuComponent>
    <div  class="user-container col-sm-6 col-md-4 col-lg-2 mb-3">
      <DisplayUser :setter="setter" image="user_friend" alt="This is a profile picture" name="The Psy" twitter="ThePsy69" :globalDatas="globalDatas"></DisplayUser>
    </div>
  </div>
</template>

<script>
import DisplayUser from "@/components/DisplayUser.vue";
import MenuComponent from "@/components/Menu.vue";

export default {
  name: "FriendsView",
  components: {MenuComponent, DisplayUser},
  props: {
    globalDatas: Object,
    setter: Function
  }
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