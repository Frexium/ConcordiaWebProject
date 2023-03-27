<template>
  <div class="container">
    <h1>Enregistrement</h1>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="username">Nom d'utilisateur</label>
        <input type="text" class="form-control" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" class="form-control" id="password" v-model="password" required>
      </div>
      <div class="form-group">
        <label for="twitter">Twitter</label>
        <input type="text" class="form-control" id="twitter" v-model="twitter" placeholder="@User">
      </div>
      <h5><span class="error-login">{{errorMessage}}</span></h5>
      <button type="submit" class="btn btn-primary">Enregistrer</button>
    </form>
    <div class="change-auth">
      <h5>Already have an account ? <router-link to="/login"><span class="register-button">login</span></router-link></h5>
    </div>
  </div>
</template>

<script>
import UserDataService from "@/services/UserDataService";
import router from "@/router";

export default {
  name: "RegisterComponent",
  data() {
    return {
      username: '',
      email: '',
      password: '',
      twitter: '',
      errorOccurs: false,
      errorMessage: '',
    }
  },
  props: {
    globalDatas: Object,
    setter: Function
  },
  methods: {
    async register() {
      var userLog = {
        username: this.username,
        twitter: this.twitter,
        email: this.email,
        password: this.password,
        dark_mode: false,
        language : 0
      }
      try {
        const response = await UserDataService.create({user: userLog})
        this.errorOccurs = false
        this.errorMessage = ''
        console.log(response);
        // eslint-disable-next-line vue/no-mutating-props
        const gd = {
          ...this.globalDatas,
          user: response.data
        }
        console.log(response.data === this.globalDatas.user);
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

<style scoped>
.change-auth {
  margin-top: 5%;
}
.error-login {
  color: orangered;
}
</style>