import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform,
    TouchableNativeFeedback,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import DefaultText from "../components/DefaultText";
import FavoriteButton from "../components/FavoriteButton";

const UniversityGridTile = (props) => {
    let TouchableComponent = TouchableOpacity;

    if (Platform.OS === "android" && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    const currentUniversityIsFavorite = useSelector((state) =>
        state.universitiesReducer.favoriteUniversities.some(
            (uni) => uni.id === props.uniId
        )
    );

    return (
        <View style={styles.gridItem}>
            <TouchableComponent style={styles.touchable} onPress={props.onSelect}>
                <View style={styles.container}>
                    <View style={styles.upperContainer}>
                        <DefaultText style={styles.textName}>{props.name}</DefaultText>
                        <DefaultText style={styles.textDepartment}>
                            {props.department}
                        </DefaultText>
                    </View>
                    <View style={styles.lowerContainer}>
                        <View style={styles.leftContainer}>
                            <DefaultText style={styles.text}>
                                Taban puanı: {props.score}
                            </DefaultText>
                            <DefaultText style={styles.text}>
                                Sıralaması: {props.placement}
                            </DefaultText>
                        </View>
                        <View style={styles.rigthContainer}>
                            <HeaderButtons HeaderButtonComponent={FavoriteButton}>
                                <Item
                                    title="Favorite"
                                    iconName={
                                        currentUniversityIsFavorite
                                            ? "ios-star"
                                            : "ios-star-outline"
                                    }
                                    onPress={props.press}
                                />
                            </HeaderButtons>
                        </View>
                    </View>
                </View>
            </TouchableComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 5,
        height: 150,
        borderRadius: 10,
        overflow: "hidden",
    },
    touchable: {
        flex: 1,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f6ff",
        flexDirection: "column",
    },
    upperContainer: {
        height: "10%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 10,
    },
    lowerContainer: {
        flexDirection: "row",
        paddingTop: 10,
    },
    leftContainer: {
        paddingTop: 10,
        width: "80%",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    rigthContainer: {
        width: "20%",
    },
    text: {
        fontFamily: "open-sans",
        fontSize: 12,
        padding: 1,
    },
    textName: {
        fontFamily: "open-sans",
        fontSize: 16,
        textAlign: "center",
    },
    textDepartment: {
        fontFamily: "open-sans-bold",
        fontSize: 14,
        textAlign: "center",
    },
});

export default UniversityGridTile;
