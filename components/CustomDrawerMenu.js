import React from 'react';
import { SafeAreaView, View, StyleSheet, Image, TouchableNativeFeedback } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import { Divider, Icon } from 'react-native-elements';
import { Ionicons } from "@expo/vector-icons";

import DefaultText from './DefaultText';
import Colors from '../constants/Colors';

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

            <View style={styles.lowerView}>
                <TouchableNativeFeedback
                    background={ripple}
                    onPress={() => props.navigation.navigate("About")}>
                    <View style={styles.aboutInfoContainer}>
                        {/* <Image
                            source={require('../assets/about-icon.jpg')}
                            style={{ height: 24, width: 24, marginHorizontal: '5%' }}
                        /> */}
                        {/* <Icon name={item.navOptionThumb} size={25} color="#808080" /> */}
                        <Ionicons name="ios-information-circle-outline" size={24} color="black" />
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
        // marginVertical: 10
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        height: '30%',
        backgroundColor: 'lightgray'
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
        backgroundColor: '#ffffff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    aboutInfoContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: '5%'
    },
    text: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        paddingLeft: 10
    }
});

export default CustomDrawerMenu;