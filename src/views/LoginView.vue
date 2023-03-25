<template>
  <div class="login-container">
    <LoginComponent class="login-component" :globalDatas="globalDatas"></LoginComponent>
  </div>
</template>

<script>
import LoginComponent from "@/components/Login.vue";

export default {
  name: "RegisterView",
  components: {LoginComponent},
  props: {
    globalDatas: Object,
  }
}
</script>

<style scoped>
.login-container {
  padding-top: 10%;
  height: 100%;
  width: 100%;
  padding-bottom: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("@/assets/auth_bg.jpg");
  background-size: 100% 100%;
}
.login-component {
  width: 30%;
  height: 50%;
  background-color: #F2F1EF;
  padding: 40px;
  border-radius: 10px;
}
</style>