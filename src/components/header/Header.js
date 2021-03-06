import React from 'react';
import {StyleSheet, Dimensions, Text, View, Image, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import store from "../../store";

const windowWidth = Dimensions.get('window').width;

export default function Header({navigation, title, loggedIn, user}) {
    if(!loggedIn){
        return (
            <View>
                <LinearGradient
                    colors={[colorUp, colorDown]}>
                    <View style ={styles.container}>
                        <View style ={styles.logoSide}>
                            <Image style={styles.logo} source={require('../../../assets/logo.png')}/>
                            <Text style={styles.text}>
                                {title}
                            </Text>
                            <Text style={styles.text}>{user}</Text>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        );
    }
    if(loggedIn) {
        return (
            <View>
                <LinearGradient
                    colors={[colorUp, colorDown]}>
                    <View style={styles.container}>
                        <View style={styles.logoSide}>
                            <Image style={styles.logo} source={require('../../../assets/logo.png')}/>
                            <Text style={styles.text}>
                                {title}
                            </Text>
                        </View>
                        <View style={styles.menue}>
                            <Text style={styles.text}>{user}</Text>
                            <TouchableOpacity style={styles.button}
                                              onPress={() => {
                                                  navigation.navigate('Home');
                                              }}>
                                <Image style={styles.image} source={require('../../../assets/home.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}
                                              onPress={() => {
                                                  navigation.navigate('Detail');
                                              }}>
                                <Image style={styles.image} source={require('../../../assets/detail.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}
                                              onPress={() => {
                                                  navigation.navigate('OneMore');
                                              }}>
                                <Image style={styles.image} source={require('../../../assets/one-more.png')}/>
                            </TouchableOpacity>

                        </View>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}

const colorUp = store.state.headerUpperColor;
const colorDown = store.state.headerLowerColor;

const styles = StyleSheet.create({
    text:{
        marginHorizontal: 10,
        color: store.state.headerTextColor,
    },
    container:{
        top: 0,
        width: windowWidth,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: 0,
    },
    menue:{
        flexDirection: 'row',
    },
    button:{
        margin: 2,
    },
    image:{
        width: 25,
        height: 25,
    },
    logo:{
        marginHorizontal: 2,
        width:100,
        height: 25,
    },
    logoSide:{
        marginTop: 2,
        flexDirection: 'row',
    }
})