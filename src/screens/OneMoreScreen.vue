<template>
  <view>
    <view>
      <Text>Nothing to see here!</Text>
      <app-button title="Hi"></app-button>
      <text v-for="item in items" :key="item.id"> {{item.message}}</text>
      <button title="cars"
      :on-press="loadCars"></button>
      <text>{{info}}</text>
    </view>
  </view>
</template>

<script>

import AppButton from "../components/base/Button";
import store from "../store";
import axios from 'axios';

export default {
  data: function() {
    return {
      cars: [],
      info: null
    };
  },

  computed:{
    items(){
      return store.getters.getItems;
    },
  },

  components: {AppButton},

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
          .then(response => (this.info = response))

    },
  }
}
</script>

<style>

</style>
