import React from "react";
import {View, StyleSheet, Text} from "react-native";
import store from "../../store";

export default function AppText({text}){
    return (
        <View style ={styles.appTextContainer}>
            <Text style={styles.appText}>
                {text}
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    appTextContainer: {
        //backgroundColor: '#b9e273',
        padding : 5,
        marginHorizontal:20,
        marginVertical:2,
        borderRadius: 10,
    },

    appText: {
        fontSize: 18,
        color: store.state.textNormalColor,
    }
});