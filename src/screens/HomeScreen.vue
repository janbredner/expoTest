<template>
  <view class="container">
    <view class="container">
      <text>sadasd</text>
      <view class="text-color-primary">
        <list-item></list-item>
      </view>
      <view>
        <contend></contend>
      </view>
      <statusbar></statusbar>
    </view>
  </view>
</template>

<script>
import Statusbar from "../components/Statusbar";
import Contend from "../components/Contend";
import ListItem from "../components/ListItem";

export default {
  components: {Contend, Statusbar, ListItem},
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
  padding: 20px;
}
.text-color-primary {
  border-radius: 25px;
  padding: 20px;
  background-color: #a5eeee;
  color: #000037;
}
</style>
