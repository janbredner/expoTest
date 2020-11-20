import React from "react";
import {StyleSheet, TouchableOpacity, Dimensions} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import store from "../../store";

TouchableOpacity.defaultProps = { activeOpacity: 0.7 };

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Background(){
    return(
            <LinearGradient
                colors={[colorUp, colorDown]}
                style={styles.appButtonContainer}>
            </LinearGradient>
    );
}
const colorDown = store.state.backgroundLowerColor;
const colorUp = store.state.backgroundUpperColor;

const styles = StyleSheet.create({
    appButtonContainer: {
        position: 'absolute',
        zIndex: -1,
        width: windowWidth,
        height:windowHeight,

    },
});