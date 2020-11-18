import React from 'react';
import {StyleSheet, Dimensions, Text, View, Image, TouchableOpacity} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function Header({navigation, title}) {
    return (
        <View style ={styles.container}>
            <View style ={styles.logoSide}>
                <Image style={styles.logo} source={require('../../../assets/logo.png')}/>
                <Text style={styles.text}>
                    {title}
                </Text>
            </View>
            <View style={styles.menue}>
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
    );
}


const styles = StyleSheet.create({
    text:{
        color: 'blue',
    },
    container:{
        width: windowWidth,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: 10,
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
        width:100,
        height: 25,
    },
    logoSide:{
        flexDirection: 'row',
    }
})