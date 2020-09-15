import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import { Directions } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";
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
            <View style={styles.upperContainer}>
              <DefaultText style={styles.textName}>{props.name} ({props.city})</DefaultText>
              <DefaultText style={styles.textDepartment}>
                {props.department}
              </DefaultText>
            </View>
            <View style={styles.lowerContainer}>
              <DefaultText
                style={styles.text}>
                Taban puanı {'\n'} {props.score}
              </DefaultText>
              <DefaultText style={styles.text}>
                Sıralaması {'\n'} {props.placement}
              </DefaultText>
              <DefaultText style={styles.text}>
                Kontenjan {'\n'} {props.quota}
              </DefaultText>
            </View>
          </View>
          <View style={styles.rightContainer}>
            <View style={styles.favoriteStarContainer}>
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
            <View style={styles.scoreTagContainer}>
              <DefaultText style={styles.scoreTypeTag}>
                {""}
                {props.scoreType}
                {""}
              </DefaultText>
            </View>

          </View>


          {/* <View style={styles.upperContainer}>
            <DefaultText style={styles.textName}>{props.name} ({props.city})</DefaultText>
            <DefaultText style={styles.textDepartment}>
              {props.department}
            </DefaultText>
          </View>
          <View style={styles.lowerContainer}>
            <View style={styles.leftContainer}>
              <DefaultText
                style={styles.text}>
                Taban puanı {'\n'} {props.score}
              </DefaultText>
              <DefaultText style={styles.text}>
                Sıralaması {'\n'} {props.placement}
              </DefaultText>
              <DefaultText style={styles.text}>
                Kontenjan {'\n'} {props.quota}
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
              <DefaultText style={styles.scoreTypeTag}>
                {"   "}
                {props.scoreType}
                {"   "}
              </DefaultText>
            </View>
          </View> */}
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
    // borderRadius: 10,
    // shadowColor: "black",
    // shadowOpacity: 0.26,
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 10,
    // elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f6ff",
    flexDirection: "row",
    backgroundColor: Colors.accentColor
  },
  leftContainer: {
    // paddingTop: 10,
    flexDirection: 'column',
    width: "80%",
    // justifyContent: "center",
    // alignItems: "flex-end",
  },
  rigthContainer: {
    // width: "20%",
    flexDirection: 'column',
  },
  favoriteStarContainer: {
    height: '50%',
    justifyContent: 'center',
    // alignItems: 'center'
  },
  scoreTagContainer: {
    height: '50%',
    justifyContent: 'center',
    // alignItems: 'center'
  },
  upperContainer: {
    // height: "10%",
    // width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "left"
    // paddingBottom: 10,
  },
  lowerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'flex-start',
    paddingTop: 10,
    marginHorizontal: 5
  },
  scoreTypeTag: {
    fontFamily: "open-sans",
    fontSize: 14,
    backgroundColor: "#18c47f",
    color: "white",
    borderRadius: 15,
    // marginTop: 30,
    marginHorizontal: 5,
    textAlign: 'center',
  },
  text: {
    fontFamily: "open-sans",
    fontSize: 14,
    padding: 1,
    textAlign: 'center',
  },
  textName: {
    fontFamily: "open-sans",
    fontSize: 16,
    paddingBottom: 2
    // textAlign: "left",
  },
  textDepartment: {
    fontFamily: "open-sans-bold",
    fontSize: 14,
    textAlign: "left",
  },
});

export default UniversityGridTile;
