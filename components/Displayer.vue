<template>
  <div class="total-displayer-container">
    <div class="displayer-buttons">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Search</span>
      </div>
      <input type="text" class="form-control" placeholder="type a name" aria-label="Name" aria-describedby="basic-addon1">
      <div class="input-group-prepend displayer-scrollable">
<!--        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
<!--          {{ typeName }}</button>-->
<!--        <div class="dropdown-menu">-->
<!--          <a class="dropdown-item"><img class="displayer-type-icon" src="../assets/grasstype.png"> Grass</a>-->
<!--          <a class="dropdown-item"><img class="displayer-type-icon" src="../assets/firetype.png"> Fire</a>-->
<!--          <a class="dropdown-item"><img class="displayer-type-icon" src="../assets/watertype.png"> Water</a>-->
<!--          <a class="dropdown-item"><img class="displayer-type-icon" src="../assets/electrictype.png"> Electric</a>-->
<!--          <a class="dropdown-item"><img class="displayer-type-icon" src="../assets/psy.png"> Psychic</a>-->
<!--          <a class="dropdown-item"><img class="displayer-type-icon" src="../assets/fighting.png"> Fighting</a>-->
<!--          <a class="dropdown-item"><img class="displayer-type-icon" src="../assets/dark.png"> Dark</a>-->
<!--          <a class="dropdown-item"><img class="displayer-type-icon" src="../assets/iron.png"> Iron</a>-->
<!--          <a class="dropdown-item"><img class="displayer-type-icon" src="../assets/dragon.png"> Dragon</a>-->
<!--          <a class="dropdown-item"><img class="displayer-type-icon" src="../assets/normal.png"> Normal</a>-->
<!--          <a class="dropdown-item"><img class="displayer-type-icon" src="../assets/normal.png"> Trainer</a>-->
<!--          <a class="dropdown-item"><img class="displayer-type-icon" src="../assets/normal.png"> Energy</a>-->
<!--        </div>-->

                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {{ typeName }}</button>
                <div class="dropdown-menu">
                  <button class="dropdown-item" type="button" @click="typeName='Grass'"><img class="displayer-type-icon" src="../assets/grasstype.png"> Grass</button>
                  <button class="dropdown-item" type="button" @click="typeName='Fire'"><img class="displayer-type-icon" src="../assets/firetype.png"> Fire</button>
                  <button class="dropdown-item" type="button" @click="typeName='Water'"><img class="displayer-type-icon" src="../assets/watertype.png"> Water</button>
                  <button class="dropdown-item" type="button" @click="typeName='Electric'"><img class="displayer-type-icon" src="../assets/electrictype.png"> Electric</button>
                  <button class="dropdown-item" type="button" @click="typeName='Psychic'"><img class="displayer-type-icon" src="../assets/psy.png"> Psychic</button>
                  <button class="dropdown-item" type="button" @click="typeName='Fighting'"><img class="displayer-type-icon" src="../assets/fighting.png"> Fighting</button>
                  <button class="dropdown-item" type="button" @click="typeName='Dark'"><img class="displayer-type-icon" src="../assets/dark.png"> Dark</button>
                  <button class="dropdown-item" type="button" @click="typeName='Iron'"><img class="displayer-type-icon" src="../assets/iron.png"> Iron</button>
                  <button class="dropdown-item" type="button" @click="typeName='Dragon'"><img class="displayer-type-icon" src="../assets/dragon.png"> Dragon</button>
                  <button class="dropdown-item" type="button" @click="typeName='Normal'"><img class="displayer-type-icon" src="../assets/normal.png"> Normal</button>
                  <button class="dropdown-item" type="button" @click="typeName='Trainer'"><img class="displayer-type-icon" src="../assets/normal.png"> Trainer</button>
                  <button class="dropdown-item" type="button" @click="typeName='Energy'"><img class="displayer-type-icon" src="../assets/normal.png"> Energy</button>
                </div>

<!--        <select id="mySelect">-->
<!--          <option value="Grass"><img class="displayer-type-icon" src="../assets/grasstype.png"> Grass</option>-->
<!--          <option value="Grass"><img class="displayer-type-icon" src="../assets/grasstype.png"> Grass</option>-->
<!--          <option value="Fire"><img class="displayer-type-icon" src="../assets/firetype.png"> Fire</option>-->
<!--          <option value="Water"><img class="displayer-type-icon" src="../assets/watertype.png"> Water</option>-->
<!--          <option value="Electric"><img class="displayer-type-icon" src="../assets/electrictype.png"> Electric</option>-->
<!--          <option value="Psychic"><img class="displayer-type-icon" src="../assets/psy.png"> Psychic</option>-->
<!--          <option value="Fighting"><img class="displayer-type-icon" src="../assets/fighting.png"> Fighting</option>-->
<!--          <option value="Dark"><img class="displayer-type-icon" src="../assets/dark.png"> Dark</option>-->
<!--          <option value="Iron"><img class="displayer-type-icon" src="../assets/iron.png"> Iron</option>-->
<!--          <option value="Dragon"><img class="displayer-type-icon" src="../assets/dragon.png"> Dragon</option>-->
<!--          <option value="Normal"><img class="displayer-type-icon" src="../assets/normal.png"> Normal</option>-->
<!--          <option value="Trainer"><img class="displayer-type-icon" src="../assets/normal.png"> Trainer</option>-->
<!--          <option value="Energy"><img class="displayer-type-icon" src="../assets/normal.png"> Energy</option>-->
<!--        </select>-->
      </div>
      <button type="button" class="btn btn-primary btn-sm is-owned">Not Owned</button>
    </div>
    <div class="row justify-content-center">
<!--      <v-container>-->
<!--        <v-row>-->
<!--          <v-col-->
<!--              v-for="index in numbers"-->
<!--              :key="index"-->
<!--              :cols="(12/5)"-->
<!--              class="mb-3"-->
<!--          >-->
<!--            <CardBox :number="index" />-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--      </v-container>-->
<!--      <v-row>-->
      <div  class="col-sm-6 col-md-4 col-lg-2 mb-3" v-for="index in numbers" :key="index">
        <CardBox :number=index></CardBox>
      </div>
<!--      </v-row>-->
<!--      <div v-for="index in 5" :key="index" class="five">-->
<!--        <div v-for="index2 in 1+((numbers-(numbers%5))/5)" :key="index2" class="three">-->
<!--          <CardBox v-if="checker(index+(index2-1)*5, numbers)" :number="index+(index2-1)*5"></CardBox>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import CardBox from "@/components/CardBox.vue";

export default {
  name: "Displayer-Component",
  components: {CardBox},
  props: {
    numbers: Number,
  },
  data () {
    return {
      typeName: "Type"
    }
  },
  methods: {
    checker(i, j) {
      return i <= j;
    }
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