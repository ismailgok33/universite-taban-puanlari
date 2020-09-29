import React from 'react';
import { SafeAreaView, View, StyleSheet, Image, TouchableNativeFeedback } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import { Divider } from 'react-native-elements';

import DefaultText from './DefaultText';

const CustomDrawerMenu = props => {
    const ripple = TouchableNativeFeedback.Ripple('#adacac', false);

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

            <View style={styles.drawerItems}>
                <DrawerItems
                    {...props}
                    style={styles.labelStyle}
                // items={items.filter((item) => item.routeName !== 'About')}
                />
            </View>

            <View style={{ marginTop: '5%' }}>
                <Divider style={{ backgroundColor: '#777f7c90' }} />
            </View>

            <View elevation={6} style={styles.lowerView}>
                <TouchableNativeFeedback
                    background={ripple}
                    onPress={() => props.navigation.navigate("About")}>
                    <View style={styles.aboutInfoContainer}>
                        <Image
                            source={require('../assets/about-icon.jpg')}
                            style={{ height: 24, width: 24, marginHorizontal: '5%' }}
                        />
                        <DefaultText style={styles.text}> Hakkında </DefaultText>
                    </View>
                </TouchableNativeFeedback>
            </View>

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
        marginTop: '10%',
        height: '30%'
    },
    drawerItems: {
        height: '50%',
    },
    labelStyle: {
        fontSize: 26,
        color: 'red'
    },
    lowerView: {
        alignItems: "flex-start",
        justifyContent: 'flex-end',
        // paddingLeft: '10%',
        height: '10%',
        width: '100%',
        backgroundColor: '#ffffff'
    },
    aboutInfoContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
    }
});

export default CustomDrawerMenu;