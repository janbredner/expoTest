<template>
  <view>
    <view>
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
.text-color-primary {
  border-radius: 25px;
  padding: 20px;
  background-color: #a5eeee;
  color: #000037;
}
</style>
