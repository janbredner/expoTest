import React from "react";
import {StyleSheet, TouchableOpacity, Text} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import store from "../../store";

TouchableOpacity.defaultProps = { activeOpacity: 0.7 };

export default function AppButton({action,title}){
    return(
        <TouchableOpacity onPress={action} >
            <LinearGradient
                colors={[colorOut, colorIn, colorOut]}
                style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}
const colorOut = store.state.buttonOuterColor;
const colorIn = store.state.buttonInnerColor;

const styles = StyleSheet.create({
    appButtonContainer: {
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginHorizontal:10,
        marginVertical:5,
        alignItems: 'center',
    },
    appButtonText: {
        fontSize: 18,
        color: store.state.buttonTextColor,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});