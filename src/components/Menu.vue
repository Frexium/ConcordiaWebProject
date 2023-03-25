<template>
<div class="menu-container">

    <div class="menu-profile">
      <div class="menu-degrade">
        <div class="menu-profile-header">
<!--          <img class="menu-wheel-img" src="../assets/gear-wheel.png">-->
        </div>
        <div class="menu-profile-footer">
          <h5 class="menu-profile-nickname">{{globalDatas.user ? globalDatas.user.USERNAME : "Unknown"}}</h5>
          <h5 class="menu-profile-id">#{{globalDatas.user ? globalDatas.user.TAG : "****"}}</h5>
          <img class="menu-profile-flag" v-if="!isFrenchFlag" src="../assets/drapeauAnglais.png" @click="toggleFlag">
          <img class="menu-profile-flag" v-else src="../assets/drapeauFrance.png" @click="toggleFlag">
        </div>
      </div>
    </div>
  <div class="menu-left">
    <div class="menu-header">
      <h1 class="menu-main-title">The Collector</h1>
      <img src="../assets/logo.png">
    </div>
    <div class="menu-nav">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link v-if="indexActive == 1" class="nav-link active" to="/">Homepage</router-link>
          <router-link v-else class="nav-link" to="/">Homepage</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="indexActive == 2" class="nav-link active" to="/extensions">Collections</router-link>
          <router-link v-else class="nav-link" to="/extensions">Collections</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="indexActive == 4" class="nav-link active" to="/about">About Us</router-link>
          <router-link v-else class="nav-link" to="/about">About Us</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
<!--        <li class="nav-item">-->
<!--          <button class="nav-link" @click="req()">Send Request</button>-->
<!--        </li>-->
      </ul>
    </div>
  </div>
</div>
</template>

<script>
/* eslint-disable vue/no-mutating-props */

import ExtensionDataService from "@/services/ExtensionDataService";
import PosseseDataService from "@/services/PosseseDataService";

export default {
  name: 'Menu-Component',
  props: {
    indexActive: Number,
    globalDatas: Object
  },
  data(){
  },
  methods: {
    req() {
      ExtensionDataService.getExtension({extensionId: 1}).then(resp => {
        this.globalDatas.ext = resp.data.Exten
        console.log(this.globalDatas.ext)
        console.log("Test: " + this.globalDatas.ext.NUMBER_CARD)
      }).catch(err => {
        console.log(err.message);
      })
      PosseseDataService.remove({cardId: 200, userId: this.globalDatas.user.ID_USER}).then(resp => {
        console.log("DONE " + resp.data)
      }).catch(err => {
        console.log(err.message);
      })
/*
      CardDataService.getCard({cardNum: 125, extensionId: 1}).then(resp => {
        var card = resp.data
        console.log(card)
        console.log("DONE CARD")
        PosseseDataService.add({cardId: card.ID_CARD, userId: this.globalDatas.user.ID_USER}).then(resp => {
          console.log("DONE " + resp.data)
        }).catch(err => {
          console.log(err.message);
        })

      })
*/
    /*PosseseDataService.getCollection({userId: this.globalDatas.user.ID_USER, extensionId: 1}).then(resp => {
      console.log("1: " + resp.data.cards);
      console.log('2: ' + resp.data.ids);
    }).catch(err => {
      console.log(err.message);
    })*/
/*
      CardDataService.getCollection({extensionId: 1}).then(resp => {
      }).catch(err => {
        console.log(err.message);
      })
*/
    },
    toggleFlag() {
      this.isFrenchFlag = !this.isFrenchFlag;
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu-container {
  margin-top: 3%;
  height: 10%;
  flex: 1;
  display: flex;
  flex-direction: row;
}
.menu-profile {
  background-image: url("@/assets/pp/user_pic.jpg");
  background-size: 100% 100%;
  height: 20vh;
  width: 20vh;
}
.menu-degrade {
  background-image: url("@/assets/degrade.png");
  background-size: 100% 56%;
  background-repeat: no-repeat;
  background-position: bottom;
  opacity: 0.8;
  height: 100%;
  width: 100%;
}
.menu-profile-header {
  height: 15%;
  display: flex;
  flex-direction: row;
  justify-content: right;
}
.menu-wheel-img {
  width: 15%;
  margin-right: 5%;
  background-color: white;
}
.menu-profile-footer {
  margin-top: 70%;
  height: 15%;
  display: flex;
  flex-direction: row;
  margin-left: 5%;
  color: white;
  align-items: center;
  justify-content: space-between;
}
.menu-profile-flag {
  width: 15%;
  height: 100%;
  margin-right: 5%;
  margin-left: 5%;
  margin-bottom: 5%;
}
.menu-left {
  height: 20vh;
  display: flex;
  flex-direction: column;
}
.menu-header {
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.menu-nav {
  height: 50%;
  width: 100%;
  align-items: center;
  margin-left: 5%;
  margin-top: 3%
}
.menu-main-title {
  margin-top: 3%;
}
</style>
