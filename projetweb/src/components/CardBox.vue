<template>
  <div class="card-container">
    <img class="card-img"  :src="require('../assets/zenith/' + number + '.jpg')">
    <div class="checkbox-container">
      <input type="checkbox" name="normal" @click="checkboxClicked()">
      <input type="checkbox" name="reverse" @click="checkboxClicked()">
    </div>
  </div>
</template>

<script>
export default {
  name: "CardBox",
  props: {
    number: Number,
  },
  data() {
    return {

    }
  },
  methods: {
    checkboxClicked() {

    }
  }
}
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  padding-right: 7%;
  padding-bottom: 7%;
}
.checkbox-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 5%;
}
.card-img {
}
</style>