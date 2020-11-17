<template>
  <view class="container">
    <text class="text-color-primary">My Vue Native App</text>
    <text class="text-color-primary">hi!</text>
    <text-input
        :style="{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}"
        v-model="text"
    />
    <text class="text-color-primary">{{text}}</text>
    <counter></counter>
  </view>
</template>

<script>
import Counter from "./Counter";

export default {
  components: {Counter},

  data: function() {
    return {
      text: '',
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