<template>
  <view>
    <view>
      <Text>Nothing to see here!</Text>
      <app-button title="Hi"></app-button>
    </view>
  </view>
</template>

<script>

import AppButton from "../components/base/Button";

export default {
  data: function() {
    return {

    };
  },
  components: {AppButton},

  props: {
    navigation: {
      type: Object
    }
  },

  methods: {
    goToHomeScreen() {
      this.navigation.navigate('Home');
    }
  }
}
</script>

<style>

.text-color-primary {
  border-radius: 25px;
  padding: 20px;
  margin: 5px;
  background-color: #d0eea5;
  color: #173700;
}
</style>
