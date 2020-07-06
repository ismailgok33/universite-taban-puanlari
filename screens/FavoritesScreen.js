import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavoritesScreen = () => {
    return (
        <View>
            <Text>
                This is Favorites Screen!!
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

export default FavoritesScreen;