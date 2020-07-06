import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UniversityDetailScreen = () => {
    return (
        <View style={style.screen}>
            <Text>
                This is University Detail Screen!!
            </Text>
        </View>
    );
};

const style = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default UniversityDetailScreen;