<template>
  <view>
      <view>
        <counter></counter>
      </view>
  </view>
</template>

<script>

import Counter from "../components/Counter";

export default {
  components: {Counter},

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
