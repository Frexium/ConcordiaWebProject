<template>
  <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
  <link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet">
  <router-view :setter="setter" :globalDatas="globalDatas"/>
</template>

<script>
/* eslint-disable vue/no-mutating-props,no-unused-vars*/
export default {
  data () {
    return {
      globalDatas: {}
    }
  },
  methods: {
    setter (newGlobalData) {
      console.log(newGlobalData)
      this.globalDatas = newGlobalData
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@import'~bootstrap/dist/css/bootstrap.css';
</style>
