<template>
  <div class="register-container">
  <RegisterComponent class="register-component" :globalDatas="globalDatas"></RegisterComponent>
  </div>
</template>

<script>
import RegisterComponent from "@/components/Register.vue";

export default {
  name: "RegisterView",
  components: {RegisterComponent},
  props: {
    globalDatas: Object
  }
}
</script>

<style scoped>
  .register-container {
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
  .register-component {
    width: 30%;
    height: 50%;
    background-color: #F2F1EF;
    padding: 40px;
    border-radius: 10px;
  }
</style>