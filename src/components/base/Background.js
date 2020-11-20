import React from "react";
import {View, Button, StyleSheet, TouchableOpacity, Text, Dimensions} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

TouchableOpacity.defaultProps = { activeOpacity: 0.7 };

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Background(){
    return(
            <LinearGradient
                colors={[colorIn, colorOut]}
                style={styles.appButtonContainer}>
            </LinearGradient>
    );
}
const colorOut = '#55ba0e';
const colorIn = '#bee977';

const styles = StyleSheet.create({
    appButtonContainer: {
        position: 'absolute',
        zIndex: -1,
        width: windowWidth,
        height:windowHeight,

    },
});