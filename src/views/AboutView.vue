<template>
  <div class="co container">
    <MenuComponent index-active=4 :globalDatas="globalDatas"></MenuComponent>
    <DisplayerComponent :numbers=230 :globalDatas="globalDatas"></DisplayerComponent>
    <div >
      <br>
          <h1 class="header_type">The Team Project</h1>
          <br>
          <img class=img-responsive id=team_project src="../assets/team_project.gif">
          <br><br>
          <p class="header_type">
            We are a team of French students in engineering school and we are passionate about trading cards and especially Pokémons.
            So through this project we wanted to share our passion. A lot of Pokédex exist online and we also found websites where all the cards are listed. However, we did not propose to make exchanges between collectors or to mark which card we had.
          </p>
          <h2 class="header_type">That's where the idea came from!</h2>
          <br>
    </div>
  </div>
  
</template>

<script>

import MenuComponent from "@/components/Menu.vue";

export default {
  name: "CollectionView",
  components: {MenuComponent},
  props: {
    globalDatas: Object
  }
}
</script>
<style scoped>
.header_type{
 font-family: Apple Chancery, cursive ; 
}
#team_project{
  border: solid;
  border-radius: 50% 20% / 10% 40%;
}
</style>