<template>
  <div class="total-displayer-container">
    <div class="displayer-buttons">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Search</span>
      </div>
      <input @input="this.updateSearch()" type="text" id="name-input" class="form-control" placeholder="type a name" aria-label="Name" aria-describedby="basic-addon1">
      <div class="input-group-prepend displayer-scrollable">

                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {{ typeName }}</button>
                <div class="dropdown-menu">
                  <button class="dropdown-item" type="button" @click="typeName='All';type=0;classified()"><img class="displayer-type-icon" src="../assets/type/normal.png"> All</button>
                  <button class="dropdown-item" type="button" @click="typeName='Grass';type=1;classified()"><img class="displayer-type-icon" src="../assets/type/grasstype.png"> Grass</button>
                  <button class="dropdown-item" type="button" @click="typeName='Fire';type=2;classified()"><img class="displayer-type-icon" src="../assets/type/firetype.png"> Fire</button>
                  <button class="dropdown-item" type="button" @click="typeName='Water';type=3;classified()"><img class="displayer-type-icon" src="../assets/type/watertype.png"> Water</button>
                  <button class="dropdown-item" type="button" @click="typeName='Electric';type=4;classified()"><img class="displayer-type-icon" src="../assets/type/electrictype.png"> Electric</button>
                  <button class="dropdown-item" type="button" @click="typeName='Psychic';type=5;classified()"><img class="displayer-type-icon" src="../assets/type/psy.png"> Psychic</button>
                  <button class="dropdown-item" type="button" @click="typeName='Fighting';type=6;classified()"><img class="displayer-type-icon" src="../assets/type/fighting.png"> Fighting</button>
                  <button class="dropdown-item" type="button" @click="typeName='Dark';type=7;classified()"><img class="displayer-type-icon" src="../assets/type/dark.png"> Dark</button>
                  <button class="dropdown-item" type="button" @click="typeName='Iron';type=8;classified()"><img class="displayer-type-icon" src="../assets/type/iron.png"> Iron</button>
                  <button class="dropdown-item" type="button" @click="typeName='Dragon';type=9;classified()"><img class="displayer-type-icon" src="../assets/type/dragon.png"> Dragon</button>
                  <button class="dropdown-item" type="button" @click="typeName='Normal';type=10;classified()"><img class="displayer-type-icon" src="../assets/type/normal.png"> Normal</button>
                  <button class="dropdown-item" type="button" @click="typeName='Trainer';type=11;classified()"><img class="displayer-type-icon" src="../assets/type/normal.png"> Trainer</button>
                  <button class="dropdown-item" type="button" @click="typeName='Energy';type=12;classified()"><img class="displayer-type-icon" src="../assets/type/normal.png"> Energy</button>
                </div>
      </div>
      <button type="button" @click="toggleOwned()" class="btn btn-primary btn-sm is-owned">{{ this.globalDatas.owned === 1 ? "All" : (this.globalDatas.owned === 2 ? "Owned" : "Not Owned")}}</button>
    </div>

      <div v-if="this.globalDatas.owned === 1">
        <div class="row justify-content-center">
        <div  class="col-sm-6 col-md-4 col-lg-2 mb-3" v-for="index in this.globalDatas.toRender" :key="index">
          <CardBox v-on:refresh="refresh" :setter="setter"  :number=index :globalDatas="globalDatas"></CardBox>
        </div>
      </div>
      </div>
      <div v-else-if="this.globalDatas.owned === 2">
        <div class="row justify-content-center">
        <div  class="col-sm-6 col-md-4 col-lg-2 mb-3" v-for="index in this.globalDatas.toRender" :key="index">
          <CardBox v-on:refresh="refresh" :setter="setter" :number=index :globalDatas="globalDatas"></CardBox>
        </div>
      </div>
      </div>
      <div v-else>
        <div class="row justify-content-center">
        <div class="col-sm-6 col-md-4 col-lg-2 mb-3" v-for="index in this.globalDatas.toRender" :key="index">
          <CardBox v-on:refresh="refresh" :setter="setter" :number=index :globalDatas="globalDatas"></CardBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardBox from "@/components/CardBox.vue";
import CardDataService from "@/services/CardDataService";
import ExtensionDataService from "@/services/ExtensionDataService";
import PosseseDataService from "@/services/PosseseDataService";

export default {
  name: "Displayer-Component",
  components: {CardBox},
  props: {
    numbers: Number,
    globalDatas: Object,
    setter: Function
  },
  data () {
    return {
      typeName: "All",
      type: 0,
      nm: Number,
      gd: this.globalDatas,
      owned: this.globalDatas.owned,
      toRender: []
    }
  },
  methods: {
    async getCardByNbExt(ext, nb) {
      const resp = await CardDataService.getCard({cardNum: nb, extensionId: ext})
      return resp.data;
    },
    async toggleOwned() {
      let gd2 = {
        ...this.globalDatas,
        owned: 1,
        toRender: []
      }
      if (this.globalDatas.owned === 3) {
        gd2.owned = 1
      } else {
        gd2.owned = this.globalDatas.owned + 1
      }
      await this.classified()
      this.setter(gd2)
    },
    refresh() {
      this.$emit("refresh")
    },
    compareNumbers(a, b) {
      return a - b;
    },
    async classified() {
      console.log("called")
      const e = document.getElementById("name-input")
      const filtered = await CardDataService.filter({typeId: this.type ? this.type : 0, extensionId: this.$route.params.id, name: ""+e.value})
      console.log(filtered.data.ids)
      console.log([...this.globalDatas.ids].filter( ( el ) => filtered.data.ids.includes(el)))
      this.setter({
        ...this.globalDatas,
        toRender: (this.globalDatas.owned === 1 ? Array.from({length: this.globalDatas.ext.NUMBER_CARD}, (_, i) => i + 1).filter((el) => filtered.data.ids.includes(el)) : (this.globalDatas.owned === 2 ? [...this.globalDatas.ids].filter((el) => filtered.data.ids.includes(el)) : [...this.globalDatas.c].filter((el) => filtered.data.ids.includes(el))))
      })
      console.log(this.globalDatas.toRender)
    },
    debounce(func, timeout = 300){
      let timer;
      return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

  },
  computed: {
    getData() {
      return this.globalDatas
    },
    updateSearch() {
      return this.debounce(this.classified)
    }
  },
  async beforeMount() {
    console.log(this.$route.params.id)
    const resp = await ExtensionDataService.getExtension({extensionId: this.$route.params.id})
    console.log(resp.data.Exten)
    const gd = {
      ...this.globalDatas,
      ext: resp.data.Exten,
      cards: [],
      ids: [],
      owned: 1,
      c: []
    }
    if(this.globalDatas.user) {
      const resp = await  PosseseDataService.getCollection({userId: this.globalDatas.user.ID_USER, extensionId: this.$route.params.id})
      gd.cards = resp.data.cards
      gd.ids = resp.data.ids
    }
    gd.c = Array.from({length: gd.ext.NUMBER_CARD}, (_, i) => i + 1).filter( ( el ) => !gd.ids.includes( el ) )

    this.setter(gd)
    console.log("------------------------------------")
    await this.classified()
    console.log("------------------------------------")
  }
  /*
  created() {
    console.log("--------------")
    for (const o of Object.keys(this.globalDatas) ) {
      console.log(o);
    }
    console.log("--------------")
    console.log(toRaw(this.globalDatas).ext)
    console.log(this.globalDatas)
    console.log(this.globalDatas.user)
    console.log(this.globalDatas.ext)
    console.log(this.globalDatas.ext.NUMBER_CARD)
  },
  mounted() {
    this.c = Array.from({length: this.globalDatas.ext.NUMBER_CARD}, (_, i) => i + 1).filter( ( el ) => !this.globalDatas.ids.includes( el ) );
    this.nm = this.globalDatas.ext.NUMBER_CARD
  }*/
}
</script>

<style scoped>

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