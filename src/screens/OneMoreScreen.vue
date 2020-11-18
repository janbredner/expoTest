<template>
  <view>
    <view>
      <button title="Go to home screen" @press="goToHomeScreen"></button>
    </view>
  </view>
</template>

<script>
export default {
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
