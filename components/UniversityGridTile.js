import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native';

const UniversityGridTile = props => {
    let TouchableComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem}>
            <TouchableComponent
                style={styles.touchable}
                onPress={props.onSelect}
            >
                <View style={styles.container}>
                    <Text style={styles.text}> {props.name} </Text>
                    <Text style={styles.text}> {props.department} </Text>
                    <Text style={styles.text}> {props.score} </Text>
                    <Text style={styles.text}> {props.placement} </Text>
                </View>
            </TouchableComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden'
    },
    touchable: {
        flex: 1
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f6ff'
    },
    text: {
        fontFamily: 'open-sans',
        fontSize: 16
    }
});

export default UniversityGridTile;