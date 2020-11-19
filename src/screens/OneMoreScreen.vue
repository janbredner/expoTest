<template>
  <view>
    <view>
      <app-text text="Nothing to see here!"></app-text>
      <app-button title="Hi" :action=loadCars ></app-button>
      <view v-for="item in items" :key="item.id">
        <app-text :text="item.message"></app-text>
      </view>
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
import store from "../store";
import axios from 'axios';


export default {
  data: function() {
    return {
      cars: null,
      info: null
    };
  },

  computed:{
    items(){
      return store.getters.getItems;
    },
  },

  components: {AppButton, AppText},

  props: {
    navigation: {
      type: Object
    }
  },

  methods: {
    loadCars: function(){
      axios
          //172.17.100.2 host IP address in Nox player
          .get('http://172.17.100.2:8000/api/cars')
          .then(response => (this.cars = response.data))

    },
  }
}
</script>

<style>

</style>
