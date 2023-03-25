<template>
  <div v-if="getData.ids !== null && getData.ids !== undefined && getData.ids.includes(number)" class="card-container">
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
    globalDatas: null,
  },
  data() {
    return {
      localGlobalDatas: this.globalDatas
    }
  },
  methods: {
    checkboxClickedAdd() {
      CardDataService.getCard({cardNum: this.number, extensionId: this.globalDatas.ext.ID_EXTENSION}).then(resp => {
        var card = resp.data
        console.log(card.ID_CARD)
        this.globalDatas.cards.push(card)
        this.globalDatas.ids.push(card.CARD_NUM)
        PosseseDataService.add({cardId: card.ID_CARD, userId: this.globalDatas.user.ID_USER}).then(resp => {
          console.log("DONE " + resp.data)
        }).catch(err => {
          console.log(err.message);
        })
      })
      /* PosseseDataService.getCollection({userId: this.globalDatas.user.ID_USER, extensionId: this.globalDatas.ext.ID_EXTENSION}).then(resp => {
        this.globalDatas.cards = resp.data.cards
        this.globalDatas.ids = resp.data.ids
      }).catch(err => {
        console.log(err.message);
      }) */
    },
    checkboxClickedRemove() {
      CardDataService.getCard({cardNum: this.number, extensionId: this.globalDatas.ext.ID_EXTENSION}).then(resp => {
        var card = resp.data
        let index = this.globalDatas.cards.indexOf(card);
        if (index !== -1) {
          this.globalDatas.cards.splice(index, 1);
        }

        index = this.globalDatas.ids.indexOf(card.CARD_NUM);
        if (index !== -1) {
          this.globalDatas.ids.splice(index, 1);
        }

        PosseseDataService.remove({cardId: card.ID_CARD, userId: this.globalDatas.user.ID_USER}).then(resp => {
        }).catch(err => {
          console.log(err.message);
        })

      })
      /* PosseseDataService.getCollection({userId: this.globalDatas.user.ID_USER, extensionId: this.globalDatas.ext.ID_EXTENSION}).then(resp => {
        this.globalDatas.cards = resp.data.cards
        this.globalDatas.ids = resp.data.ids
      }).catch(err => {
        console.log(err.message);
      }) */
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
.card-img {
}
.card-img-bg {
  opacity: 0.4;
}
.bgop {
  opacity: 1;
}
</style>