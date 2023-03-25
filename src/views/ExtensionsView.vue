<template>
  <div class="co container">
    <MenuComponent index-active="2" :globalDatas="globalDatas"></MenuComponent>
    <div class="extension-box">
      <router-link @click="
/* eslint-disable */nume=2" to="/collection"><img  class="extension-img" src="../assets/logo_collection/CZ_FR.png"></router-link>
      <router-link @click="
/* eslint-disable */ nume=1" to="/collection"><img  class="extension-img" src="../assets/logo_collection/CRE_FR.png"></router-link>

    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-mutating-props */
import MenuComponent from "@/components/Menu.vue";
import PosseseDataService from "@/services/PosseseDataService";
import ExtensionDataService from "@/services/ExtensionDataService";

export default {
  name: "ExtensionsView",
  components: {MenuComponent},
  props: {
    nume: Number,
    globalDatas: Object
  },
  methods : {
    getExt(id) {

      ExtensionDataService.getExtension({extensionId: id}).then(resp => {
        this.globalDatas.ext = resp.data.Exten
      }).catch(err => {
        console.log(err.message);
      })
      if(this.globalDatas.user) {
        PosseseDataService.getCollection({userId: this.globalDatas.user.ID_USER, extensionId: id}).then(resp => {
          this.globalDatas.cards = resp.data.cards ? resp.data.cards : []
          this.globalDatas.ids = resp.data.ids ? resp.data.ids : []
        }).catch(err => {
          console.log(err.message);
        })
      }
    }
  },
  beforeUnmount() {
    this.getExt(this.nume)
  }
}
</script>

<style scoped>
.co {
  display: flex;
  flex-direction: column;
}
.extension-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10%;
  height: 100%;
  width: 100%;
}
.extension-img {
  width: 80%;
  height: 10%;
}
</style>