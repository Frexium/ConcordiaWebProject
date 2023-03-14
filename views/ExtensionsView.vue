<template>
    <MenuComponent class="co"></MenuComponent>
    <div class="extension-box">
      <img class="extension-img" src="../assets/CZ_FR.png">
      <img class="extension-img" src="../assets/CRE_FR.png">
    </div>
</template>

<script>
export default {
  name: "ExtensionsView"
}
</script>

<style scoped>
.extension-box {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 10%;
}
.extension-img {
  width: 30%;
  height: 10%;
}
</style>