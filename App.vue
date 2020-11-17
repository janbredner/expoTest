<template>
  <view class="container">
    <home-screen></home-screen>
  </view>
</template>

<script>
import HomeScreen from "./src/screens/HomeScreen";

export default {
  components: {HomeScreen},
  data: function() {
    return {

    };
  },
  methods: {

  }
}
</script>

<style>
.container {
  background-color: #cdffb0;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  border-radius: 25px;
  padding: 20px;
  background-color: #a5eeee;
  color: #000037;
}
</style>

