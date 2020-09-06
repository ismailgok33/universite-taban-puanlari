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
          <View style={styles.leftContainer}>
            <DefaultText style={styles.text}>
              {props.name.toLocaleUpperCase()}
            </DefaultText>
            <DefaultText style={styles.text}> {props.department} </DefaultText>
            <DefaultText style={styles.text}> {props.score} </DefaultText>
            <DefaultText style={styles.text}> {props.placement} </DefaultText>
          </View>
          <View style={styles.rigthContainer}>
            <HeaderButtons HeaderButtonComponent={FavoriteButton}>
              <Item
                title="Favorite"
                iconName={
                  currentUniversityIsFavorite ? "ios-star" : "ios-star-outline"
                }
                onPress={props.press}
              />
            </HeaderButtons>
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
    flexDirection: "row",
  },
  leftContainer: {
    width: "80%",
  },
  rigthContainer: {
    width: "20%",
  },
  text: {
    fontFamily: "open-sans",
    fontSize: 16,
  },
});

export default UniversityGridTile;
