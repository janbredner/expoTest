<template>
  <view>
    <view>
      <button title="Go to detail screen" @press="goToDetailScreen"></button>
      <button title="Go to one more screen" @press="goToOneMoreScreen"></button>
      <view>
        <counter></counter>
      </view>
    </view>
  </view>
</template>

<script>

import Counter from "../components/Counter";
import Statusbar from "../components/Statusbar";
import Contend from "../components/Contend";
import ListItem from "../components/ListItem";

export default {
  components: {Contend, Statusbar, ListItem, Counter},

  data: function() {
    return {

    };
  },

  props: {
    navigation: {
      type: Object
    }
  },

  methods: {
    goToDetailScreen() {
      this.navigation.navigate('Detail');
    },

    goToOneMoreScreen() {
      this.navigation.navigate('OneMore');
    }
  }
}
</script>

<style>

.text-color-primary {
  border-radius: 25px;
  padding: 20px;
  margin: 5px;
  background-color: #a5eeee;
  color: #000037;
}
</style>
