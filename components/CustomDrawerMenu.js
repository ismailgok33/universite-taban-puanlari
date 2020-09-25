import React from 'react';
import { SafeAreaView, View, StyleSheet, Image, TouchableNativeFeedback } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import { Divider } from 'react-native-elements';

import DefaultText from './DefaultText';

const CustomDrawerMenu = props => {
    return (
        <SafeAreaView
            style={styles.container}
            forceInset={{ top: 'always', horizontal: 'never' }}
        >
            <View style={styles.iconContainer}>
                {/* <DefaultText style={styles.headerContainer}>
                    Burada ikon gösterilebilir.
                    </DefaultText> */}
                <Image
                    source={require('../assets/app-icon.png')}
                    style={{ height: 128, width: 128 }}
                />
            </View>

            <View style={{ marginTop: '5%' }}>
                <Divider style={{ backgroundColor: '#777f7c90' }} />
            </View>

            <DrawerItems {...props} />
            <TouchableNativeFeedback style={styles.lowerView}
                onPress={() => props.navigation.navigate("About")}>
                <View style={styles.aboutInfoContainer}>
                    <Image
                        source={require('../assets/about-icon.jpg')}
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
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%'
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