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
import OneMoreScreen from "./src/screens/OneMoreScreen";
import Header from "./src/components/header/Header";
import React from 'react';

const StackNavigator = createStackNavigator(
    {
      Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => {
          return {
            headerTitle: () => <Header navigation={navigation} title='Home' />,
          };
        }
      },

      Detail: {
        screen: DetailScreen,
        navigationOptions: ({navigation}) => {
          return {
            headerTitle: () => <Header navigation={navigation} title='Detail' />,
          };
        }
      },

      OneMore: {
        screen: OneMoreScreen,
        navigationOptions: ({navigation}) => {
          return {
            headerTitle: () => <Header navigation={navigation} title='OneMore' />,
          };
        }
      }
    },
    {
      defaultNavigationOptions: {
        title: 'asd',
        headerLeft: null,
        headerStyle:{
          backgroundColor:'#b1ea51',
          height: 40,
        },
      },
      headerMode: 'screen',
      cardStyle:{backgroundColor:'#d0eea5',
      }
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

