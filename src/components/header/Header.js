import React from 'react';
import {StyleSheet, Button, Text, View, Alert} from 'react-native';
import {AppNavigator} from '../../../App';

export default function Header() {
    return (
        <View>
            <Text>
                headerTextsdfsdf
            </Text>
            <Button
                title="Detail"
                onPress={() => {
                    this.navigation.navigate('Detail');
                }}
            />
        </View>
    );
}