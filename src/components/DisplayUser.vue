<template>
  <div class="card" style="width: 18rem;">
    <img :src="require('../assets/pp/' + image + '.png')" class="card-img-top" :alt="alt">
    <div class="card-body">
      <h5 class="card-title">{{name}}</h5>
      <p class="card-text"><img class="twitter-img" :src="require('../assets/twitter.png')"> @{{twitter}}</p>
      <a href="#" class="btn btn-primary">View Collection</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "DisplayUser",
  props: {
    image: String,
    alt: String,
    name: String,
    twitter: String,
    globalDatas: Object,
    setter: Function
  },
}
</script>

<style scoped>
.twitter-img {
  width: 10%;
}
</style>