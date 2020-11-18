<template>
  <app-navigator></app-navigator>
</template>

<script>


import {
  createAppContainer,
  createStackNavigator,
} from "vue-native-router";

import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";

const StackNavigator = createStackNavigator(
    {
      Home: HomeScreen,
      Detail: DetailScreen,
    },
    {
      initialRouteName: 'Home',
    }
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { AppNavigator },
}
</script>

