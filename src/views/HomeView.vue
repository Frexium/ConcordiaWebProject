<template>
  <div class="co container">
    <MenuComponent :setter="setter" index-active=1 :globalDatas="globalDatas"></MenuComponent>
    <div class="home-right">
      <div class="top">
        <div class="hype">
          <h1 id="5">Access your collection.</h1><h1 id="6"> Save your cards and discover the one you lack!</h1>
          <p id="7">
            This is the start of your grand quest for cards.<br>
            However, remember, you are not alone in your adventure!<br>
            Users from all around the world have their own collections. <br>
            Just like you they crave for new cards to obtain. <br>
            Thanks to our card research feature, you’ll be able to see the list of users in possession of the card you seek.<br>
            If you send him an invitation, and if he accepts, you’ll be able to trade cards.
          </p>
        </div>

        <div class="current">
          <h1 id="8">Current extensions: Chill reign and Zenith</h1>
          <a><img src="../assets/logo_collection/logo-Crown-Zenith.png"></a>
          <a><img src="../assets/logo_collection/logo-chilling-reign.png"></a>
        </div>
      </div>
      <div class="others">
        <h1 id="9">Others extensions in the same generation:</h1>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="10"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="11"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="12"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/logo_collection/logo-astral-radiance.png" alt="Image 1">
            </div>
            <div class="carousel-item">
              <img  src="../assets/logo_collection/logo-battle-styles.png" alt="Image 2">
            </div>
            <div class="carousel-item">
              <img  src="../assets/logo_collection/logo-brilliant-stars.png" alt="Image 3">
            </div>
            <div class="carousel-item">
              <img  src="../assets/logo_collection/logo-celebrations.png" alt="Image 4">
            </div>
            <div class="carousel-item">
              <img  src="../assets/logo_collection/logo-champion-path.png" alt="Image 5">
            </div>
            <div class="carousel-item">
              <img  src="../assets/logo_collection/logo-darkness-ablaze.png" alt="Image 6">
            </div>
            <div class="carousel-item">
              <img  src="../assets/logo_collection/logo-evolving-skies.png" alt="Image 7">
            </div>
            <div class="carousel-item">
              <img  src="../assets/logo_collection/logo-fusion-strike.png" alt="Image 8">
            </div>
            <div class="carousel-item">
              <img  src="../assets/logo_collection/logo-lost-origin.png" alt="Image 9">
            </div>
            <div class="carousel-item">
              <img  src="../assets/logo_collection/logo-rebel-clash.png" alt="Image 10">
            </div>
            <div class="carousel-item">
              <img  src="../assets/logo_collection/logo-shining-fates.png" alt="Image 11">
            </div>
            <div class="carousel-item">
              <img  src="../assets/logo_collection/logo-silver-tempest.png" alt="Image 12">
            </div>
            <div class="carousel-item">
              <img  src="../assets/logo_collection/logo-vivid-voltage.png" alt="Image 13">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div class="games">
        <h1 id="10">Pokémon Games:</h1>
        <p class="tx" id="11">The cards you cherish are illustrations of your favorite Pokémon’s. But they come from different games.<br>
          Explore the regions of each game to obtain your favorite Pokémon, train and fight with them in grand adventures.<br>
          Here are the games from which the available extensions on our website are inspired by:
        </p>
        <a href="https://www.nintendo.com/sg/switch/sword_shield/index.html"><img class=img-responsive src="../assets/swandsh.png"></a>
      </div>
      <div class="end">
        <h2 id="12">Others:</h2>
        <p class="tx" id="14">If you want to learn all there is to know about every Pokémon, then you should go see the Pokédex.</p>
        <a href="https://pokemondb.net/pokedex/all" id="15">Complete Pokédex</a>
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
  props: {
    globalDatas: Object,
    setter: Function
  },
  data () {
    return {
      images: [
        {src: require('../assets/logo_collection/logo-astral-radiance.png'), alt: 'Image 1'},
        {src: require('../assets/logo_collection/logo-battle-styles.png'), alt: 'Image 2'},
        {src: require('../assets/logo_collection/logo-brilliant-stars.png'), alt: 'Image 3'},
        {src: require('../assets/logo_collection/logo-celebrations.png'), alt: 'Image 4'},
        {src: require('../assets/logo_collection/logo-champion-path.png'), alt: 'Image 5'},
        {src: require('../assets/logo_collection/logo-darkness-ablaze.png'), alt: 'Image 6'},
        {src: require('../assets/logo_collection/logo-evolving-skies.png'), alt: 'Image 7'},
        {src: require('../assets/logo_collection/logo-fusion-strike.png'), alt: 'Image 8'},
        {src: require('../assets/logo_collection/logo-lost-origin.png'), alt: 'Image 9'},
        {src: require('../assets/logo_collection/logo-rebel-clash.png'), alt: 'Image 10'},
        {src: require('../assets/logo_collection/logo-shining-fates.png'), alt: 'Image 11'},
        {src: require('../assets/logo_collection/logo-silver-tempest.png'), alt: 'Image 12'},
        {src: require('../assets/logo_collection/logo-vivid-voltage.png'), alt: 'Image 13'},
      ],
      imgStyles: []
    }
  },
}
</script>

<style scoped>
#carouselExampleIndicators{
  /*background-color: rgba(0, 0, 0, 0.623);*/
  background-color: #171a1f33;
  border-radius: 15px;
}
.co {
  display: flex;
  flex-direction: column;
}
.home-right {
  margin-top: 5%;
}

img {
  width: 350px;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer;
}
.others{
  background-color: white;
}
</style>
