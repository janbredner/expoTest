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
import LogInScreen from "./src/screens/LogInScreen";
import Header from "./src/components/header/Header";

import React from 'react';
import store from "./src/store";

const StackNavigator = createStackNavigator(
    {
      LogIn: {
        screen: LogInScreen,
        navigationOptions: ({navigation}) => {
          return {
            headerTitle: () => <Header navigation={navigation}
                                       title='LogIn'
                                       loggedIn={false}
                                       user=''/>,
          };
        }
      },

      Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => {
          return {
            headerTitle: () => <Header navigation={navigation}
                                       title='Home'
                                       loggedIn={true}
                                       user={store.getters.getUser.name}/>,
          };
        }
      },

      Detail: {
        screen: DetailScreen,
        navigationOptions: ({navigation}) => {
          return {
            headerTitle: () => <Header navigation={navigation}
                                       title='Detail'
                                       loggedIn={true}
                                       user={store.getters.getUser.name}/>,
          };
        }
      },

      OneMore: {
        screen: OneMoreScreen,
        navigationOptions: ({navigation}) => {
          return {
            headerTitle: () => <Header navigation={navigation}
                                       title='OneMore'
                                       loggedIn={true}
                                       user={store.getters.getUser.name}/>,
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
      initialRouteName: 'LogIn',
    }
);


const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { AppNavigator },
}
</script>

