<template>
  <view>
    <background></background>
    <view>
      <app-text text="Nothing to see here!"></app-text>
      <app-button title="cars" :action="loadCars"></app-button>
      <view v-for="car in cars" :key="car.id">
        <app-text :text="'ID : ' + car.id + '   Title: ' + car.title "></app-text>
      </view>
    </view>
  </view>
</template>

<script>

import AppText from "../components/base/Text";
import AppButton from "../components/base/Button";
import Background from "../components/base/Background";
import store from "../store";

export default {

  components: {AppButton, AppText, Background},

  computed:{
    message(){ return store.getters.getMessage },
    cars(){ return store.getters.getCars; },
  },

  props: {
    navigation: {
      type: Object
    }
  },

  beforeMount() {
    if(!store.getters.isLoggedIn){
      this.navigation.navigate('LogIn');
    }
  },

  methods: {
    async loadCars(){
        await store.dispatch('loadCars');
    },
  }
}
</script>
