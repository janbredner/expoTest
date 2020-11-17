<template>
  <view class="container">
    <text class="text-color-primary">My Vue Native App</text>
    <text>hi!</text>
    <text-input
        :style="{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}"
        v-model="text"
    />
    <text>{{text}}</text>
  </view>
</template>

<script>
export default {
  data: function() {
    return {
      text: ''
    };
  }
}
</script>

<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>
