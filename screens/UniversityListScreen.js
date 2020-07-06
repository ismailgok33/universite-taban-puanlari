import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const UniversityListScreen = props => {
    return (
        <View style={style.screen}>
            <Text>
                This is University List Screen!!
            </Text>
            <Button title="Go to University Details" onPress={() => { props.navigation.navigate("UniversityDetail") }} />
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

export default UniversityListScreen;