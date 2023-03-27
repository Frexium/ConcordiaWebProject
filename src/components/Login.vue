<template>
  <div class="container">
    <h1>Connexion</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" class="form-control" id="password" v-model="password" required>
      </div>
      <h5><span class="error-login">{{errorMessage}}</span></h5>
      <button type="submit" class="btn btn-primary">Connexion</button>
    </form>
    <div class="change-auth">
    <h5>Don't have an account ? <router-link to="/register"><span class="register-button">register</span></router-link></h5>
    </div>
    </div>
</template>

<script>
/* eslint-disable vue/no-mutating-props,no-unused-vars */
import UserDataService from "@/services/UserDataService";
//import globalDatas from "../../globalDatas";
import router from "@/router";

export default {
  name: 'Login-Component',
  data () {
    return {
      userLog: {
        email: '',
        password: ''
      },
      errorOccurs: false,
      errorMessage: '',
    }
  },
  props: {
    globalDatas: Object,
    setter: Function
  },
  methods: {
    async login () {
      let eemail = document.getElementById("email");
      this.userLog.email = eemail.value;
      let epassword = document.getElementById("password");
      this.userLog.password = epassword.value;
      try {
        const response = await UserDataService.postLogin(this.userLog)
        //then
        this.errorOccurs = false
        this.errorMessage = ''
        const gd = {
          ...this.globalDatas,
          user: response.data.user
        }
        this.setter(gd)
        await router.push({path: '/'})
      } catch (error) {
        if (error.response && error.response.data) {
          this.errorMessage = error.response.data.message
        } else {
          this.errorMessage = 'An error occurred, try again.'
        }
        this.errorOccurs = true;
        this.$forceUpdate;
      }
    }
  }
}
</script>

<style scoped lang="scss">
.register-button {
  color: dodgerblue;
}
.change-auth {
  margin-top: 5%;
}
.error-login {
  color: orangered;
}
</style>
