import React from "react";
import {View, Button, StyleSheet, TouchableOpacity, Text} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

TouchableOpacity.defaultProps = { activeOpacity: 0.7 };

export default function AppButton({onPress,title}){
    return(
        <TouchableOpacity onPress={onPress} >
            <LinearGradient
                colors={[colorOut, colorIn, colorOut]}
                style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}
const colorOut = '#187e08';
const colorIn = '#44983b';

const styles = StyleSheet.create({
    appButtonContainer: {
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginHorizontal:10,
        alignItems: 'center',
    },
    appButtonText: {
        fontSize: 18,
        color: "#effad8",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});