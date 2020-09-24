import React from 'react';
import { SafeAreaView, View, StyleSheet, Image, TouchableNativeFeedback } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';

import DefaultText from './DefaultText';

const CustomDrawerMenu = props => {
    return (
        <SafeAreaView
            style={styles.container}
            forceInset={{ top: 'always', horizontal: 'never' }}
        >
            <View>
                <DefaultText style={styles.headerContainer}>
                    Burada ikon gösterilebilir.
                    </DefaultText>
            </View>
            <DrawerItems {...props} />
            <TouchableNativeFeedback style={styles.lowerView}>
                <View style={styles.aboutInfoContainer}>
                    <Image
                        source={require('../assets/a-z.png')}
                        style={{ height: 24, width: 24 }}
                    />
                    <DefaultText style={styles.text}> Hakkında </DefaultText>
                </View>
            </TouchableNativeFeedback>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10
    },
    lowerView: {
        alignItems: "flex-end",
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        height: '20%'
    },
    aboutInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'flex-end'
    },
    text: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
    }
});

export default CustomDrawerMenu;