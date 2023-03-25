<template>
  <div class="total-displayer-container">
    <div class="displayer-buttons">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Search</span>
      </div>
      <input type="text" class="form-control" placeholder="type a name" aria-label="Name" aria-describedby="basic-addon1">
      <div class="input-group-prepend displayer-scrollable">

                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {{ typeName }}</button>
                <div class="dropdown-menu">
                  <button class="dropdown-item" type="button" @click="typeName='Grass'"><img class="displayer-type-icon" src="../assets/type/grasstype.png"> Grass</button>
                  <button class="dropdown-item" type="button" @click="typeName='Fire'"><img class="displayer-type-icon" src="../assets/type/firetype.png"> Fire</button>
                  <button class="dropdown-item" type="button" @click="typeName='Water'"><img class="displayer-type-icon" src="../assets/type/watertype.png"> Water</button>
                  <button class="dropdown-item" type="button" @click="typeName='Electric'"><img class="displayer-type-icon" src="../assets/type/electrictype.png"> Electric</button>
                  <button class="dropdown-item" type="button" @click="typeName='Psychic'"><img class="displayer-type-icon" src="../assets/type/psy.png"> Psychic</button>
                  <button class="dropdown-item" type="button" @click="typeName='Fighting'"><img class="displayer-type-icon" src="../assets/type/fighting.png"> Fighting</button>
                  <button class="dropdown-item" type="button" @click="typeName='Dark'"><img class="displayer-type-icon" src="../assets/type/dark.png"> Dark</button>
                  <button class="dropdown-item" type="button" @click="typeName='Iron'"><img class="displayer-type-icon" src="../assets/type/iron.png"> Iron</button>
                  <button class="dropdown-item" type="button" @click="typeName='Dragon'"><img class="displayer-type-icon" src="../assets/type/dragon.png"> Dragon</button>
                  <button class="dropdown-item" type="button" @click="typeName='Normal'"><img class="displayer-type-icon" src="../assets/type/normal.png"> Normal</button>
                  <button class="dropdown-item" type="button" @click="typeName='Trainer'"><img class="displayer-type-icon" src="../assets/type/normal.png"> Trainer</button>
                  <button class="dropdown-item" type="button" @click="typeName='Energy'"><img class="displayer-type-icon" src="../assets/type/normal.png"> Energy</button>
                </div>
      </div>
      <button type="button" class="btn btn-primary btn-sm is-owned">Not Owned</button>
    </div>
    <div v-if="globalDatas.ext" class="row justify-content-center">
      <div class="col-sm-6 col-md-4 col-lg-2 mb-3" v-for="index in globalDatas.ext.NUMBER_CARD" :key="index">
        <CardBox :number=index :globalDatas="globalDatas"></CardBox>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-mutating-props */
import CardBox from "@/components/CardBox.vue";
import CardDataService from "@/services/CardDataService";

export default {
  name: "Displayer-Component",
  components: {CardBox},
  props: {
    numbers: Number,
    globalDatas: Object
  },
  data () {
    return {
      typeName: "Type",
      owned: true
    }
  },
  methods: {
    getCardByNbExt(ext, nb) {
      CardDataService.getCard({cardNum: nb, extensionId: ext}).then(resp => {
        return resp.data;
      }).catch(err => {
        console.log(err.message);
      })
    }
  },
  beforeMount() {

  }
}
</script>

<style scoped>
.displayer-container {
}
.three {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.five {
  justify-content: space-around;
  max-width: 20%;
}
.total-displayer-container {
  display: flex;
  flex-direction: column;
}
.displayer-buttons {
  display: flex;
  flex-direction: row;
  margin-top: 5%;
  margin-bottom: 2%;
}
.displayer-scrollable {
  margin-left: 2%;
}
.displayer-type-icon {
  width: 3%;
}
.is-owned {
  width: 15%;
  margin-left: 2%;
}
</style>