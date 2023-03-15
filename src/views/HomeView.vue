<template>
  <div class="co container">
    <MenuComponent index-active=1></MenuComponent>
    <div class="home-right">
      <div class="top">
        <div class="hype">
          <h1>Access your collection.<br> Save your cards and discover the one you lack!</h1>
          <p>
            This is the start of your grand quest for cards.<br>
            However, remember, you are not alone in your adventure!<br>
            Users from all around the world have their own collections. <br>
            Just like you they crave for new cards to obtain. <br>
            Thanks to our card research feature, you’ll be able to see the list of users in possession of the card you seek.<br>
            If you send him an invitation, and if he accepts, you’ll be able to trade cards.
          </p>
        </div>

        <div class="current">
          <h1>Current extensions: Chill reign and Zenith</h1>
          <a><img src="../assets/logo-Crown-Zenith.png"></a>
          <a><img src="../assets/logo-chilling-reign.png"></a>
        </div>
      </div>
      <div class="others">
        <h1>Others extensions in the same generation:</h1>
        <div class="scroll-menu" @scroll="scrollHandler">
          <div class="scroll-wrapper">
            <img v-for="(image, index) in images" :key="index" :src="image.src" :alt="image.alt">
          </div>
        </div>
      </div>

      <div class="games">
        <h1>Pokémon Games:</h1>
        <p class="tx">The cards you cherish are illustrations of your favorite Pokémon’s. But they come from different games.<br>
          Explore the regions of each game to obtain your favorite Pokémon, train and fight with them in grand adventures.<br>
          Here are the games from which the available extensions on our website are inspired by:
        </p>
        <a href="https://www.nintendo.com/sg/switch/sword_shield/index.html"><img class="game" src="../assets/swandsh.png"></a>
      </div>
      <div class="end">
        <h2>Others:</h2>
        <p class="tx">If you want to learn all there is to know about every Pokémon, then you should go see the Pokédex.</p>
        <a href="https://pokemondb.net/pokedex/all">Complete Pokédex</a>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src


import MenuComponent from "@/components/Menu.vue";

export default {
  name: 'HomeView',
  components: {MenuComponent},
  data () {
    return {
      images: [
        {src: require('../assets/logo-astral-radiance.png'), alt: 'Image 1'},
        {src: require('../assets/logo-battle-styles.png'), alt: 'Image 2'},
        {src: require('../assets/logo-brilliant-stars.png'), alt: 'Image 3'},
        {src: require('../assets/logo-celebrations.png'), alt: 'Image 4'},
        {src: require('../assets/logo-champion-path.png'), alt: 'Image 5'},
        {src: require('../assets/logo-darkness-ablaze.png'), alt: 'Image 6'},
        {src: require('../assets/logo-evolving-skies.png'), alt: 'Image 7'},
        {src: require('../assets/logo-fusion-strike.png'), alt: 'Image 8'},
        {src: require('../assets/logo-lost-origin.png'), alt: 'Image 9'},
        {src: require('../assets/logo-rebel-clash.png'), alt: 'Image 10'},
        {src: require('../assets/logo-shining-fates.png'), alt: 'Image 11'},
        {src: require('../assets/logo-silver-tempest.png'), alt: 'Image 12'},
        {src: require('../assets/logo-vivid-voltage.png'), alt: 'Image 13'},
      ],
      imgStyles: []
    }
  },
}
</script>

<style scoped>
.co {
  display: flex;
  flex-direction: column;
}
.home-right {
  margin-top: 5%;
}
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
.scroll-menu {
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
}

.scroll-wrapper {
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  padding: 10px;
}

img {
  width: 350px;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer;
}
.game{
  width: 1100px;
  height: 700px;
}
.others{
  background-color: white;
}
</style>
