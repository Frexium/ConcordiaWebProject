<template>
  <div v-if="globalDatas.user">
  <div v-if="globalDatas.ids !== null && globalDatas.ids !== undefined && globalDatas.ids.includes(number)" class="card-container">
    <img  class="card-img" :src="require('../assets/' + globalDatas.ext.NAME+ '/' + number + '.jpg')">
    <div class="checkbox-container">
<!--      <input type="checkbox" name="normal" @click="checkboxClickedNormal()">-->
<!--      <input type="checkbox" name="reverse" @click="checkboxClickedReverse()">-->
      <button @click="checkboxClickedRemove()" type="button" class="btn btn-danger">Remove</button>
    </div>
  </div>
  <div v-else class="card-container">
    <img  class="card-img"  :src="require('../assets/' + globalDatas.ext.NAME + '/' + number + '.jpg')" style="filter: opacity(0.4) drop-shadow(0 0 black)">
    <div class="checkbox-container">
<!--      <input type="checkbox" name="normal" @click="checkboxClickedNormal()">-->
<!--      <input type="checkbox" name="reverse" @click="checkboxClickedReverse()">-->
      <button @click="checkboxClickedAdd()" type="button" class="btn btn-primary">Add</button>
    </div>
  </div>
  </div>
  <div v-else>
    <img  class="card-img" :src="require('../assets/' + globalDatas.ext.NAME+ '/' + number + '.jpg')">
  </div>
</template>

<script>
/* eslint-disable vue/no-mutating-props,no-unused-vars */
import PosseseDataService from "@/services/PosseseDataService";
import CardDataService from "@/services/CardDataService";

export default {
  name: "CardBox",
  props: {
    number: Number,
    extid: Number,
    globalDatas: Object,
    setter: Function,
  },
  data() {
    return {
      localGlobalDatas: this.globalDatas,
    }
  },
  methods: {
    async checkboxClickedAdd() {
        const resp = await CardDataService.getCard({cardNum: this.number, extensionId: this.getData.ext.ID_EXTENSION})
        var card = resp.data

        const req = await PosseseDataService.add({cardId: card.ID_CARD, userId: this.getData.user.ID_USER})

      const gd = {
        ...this.globalDatas,
        cards: [...this.globalDatas.cards],
        ids: [...this.globalDatas.ids],
        c: []
      }
      gd.cards.push(card)
      gd.ids.push(card.CARD_NUM)
      gd.c = Array.from({length: gd.ext.NUMBER_CARD}, (_, i) => i + 1).filter( ( el ) => !gd.ids.includes(el) )
      this.setter(gd)
      this.$forceUpdate
      this.$emit("refresh")
    },
    async checkboxClickedRemove() {
      const resp = await CardDataService.getCard({cardNum: this.number, extensionId: this.globalDatas.ext.ID_EXTENSION})

      var card = resp.data
      const gd = {
        ...this.globalDatas,
        cards: [...this.globalDatas.cards],
        ids: [...this.globalDatas.ids],
        c: []
      }
      let index = this.globalDatas.cards.indexOf(card);
      if (index !== -1) {
        gd.cards.splice(index, 1);
      }

      index = this.globalDatas.ids.indexOf(card.CARD_NUM);
      if (index !== -1) {
        gd.ids.splice(index, 1);
      }

      const req = await PosseseDataService.remove({cardId: card.ID_CARD, userId: this.globalDatas.user.ID_USER})


      gd.c = Array.from({length: this.globalDatas.ext.NUMBER_CARD}, (_, i) => i + 1).filter( ( el ) => !gd.ids.includes( el ) )
      this.setter(gd)
      this.$forceUpdate
      this.$emit("refresh")
    }
  },
  computed: {
    getData() {
      return this.localGlobalDatas
    }
  },
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

.card-img-bg {
  opacity: 0.4;
}
.bgop {
  opacity: 1;
}
</style>