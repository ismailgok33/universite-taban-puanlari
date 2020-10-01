import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import DefaultText from "../components/DefaultText";
import FavoriteButton from "../components/FavoriteButton";

const UniversityGridTile = (props) => {
  const [lastTap, setLastTap] = useState(null);

  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  const currentUniversityIsFavorite = useSelector((state) =>
    state.universitiesReducer.favoriteUniversities.some(
      (uni) => uni.id === props.uniId
    )
  );


  const doubleTabHandler = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (lastTap && (now - lastTap) < DOUBLE_PRESS_DELAY) {
      props.press();
    } else {
      setLastTap(now)
    }
  };

  const tagBackgroundColorHandler = (tag) => {
    switch (tag) {
      case "SAY":
        return styles.sayTagBC;
      case "SÖZ":
        return styles.sozTagBC;
      case "EA":
        return styles.eaTagBC;
      case "DİL":
        return styles.dilTagBC;
      case "TYT":
        return styles.tytTagBC;
      default:
        return styles.sayTagBC;
    }
  };

  return (
    <View style={styles.gridItem}>
      <TouchableWithoutFeedback style={styles.touchable} onPress={doubleTabHandler}>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <View style={styles.upperContainer}>
              <DefaultText style={styles.textName}>
                {props.name} ({props.city})
              </DefaultText>
              <DefaultText style={styles.textDepartment}>
                {props.department}
              </DefaultText>
            </View>
            <View style={styles.lowerContainer}>
              <DefaultText style={styles.text}>
                Taban puanı {"\n"} {props.score}
              </DefaultText>
              <DefaultText style={styles.text}>
                Sıralaması {"\n"} {props.placement}
              </DefaultText>
              <DefaultText style={styles.text}>
                Kontenjan {"\n"} {props.quota}
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
                      ? "ios-heart"
                      : "ios-heart-empty"
                  }
                  onPress={props.press}
                />
              </HeaderButtons>
            </View>
            <View style={styles.scoreTagContainer}>
              <DefaultText
                style={[
                  styles.scoreTypeTag,
                  tagBackgroundColorHandler(props.scoreType),
                ]}
              >
                {""}
                {props.scoreType}
                {""}
              </DefaultText>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
    borderRadius: 3,
    // shadowColor: "black",
    shadowOpacity: 0.26,
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 10,
    // elevation: 3,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f6ff",
    flexDirection: "row",
    backgroundColor: "white",
    // backgroundColor: Colors.accentColor,
  },
  leftContainer: {
    // paddingTop: 10,
    flexDirection: "column",
    width: "80%",
    // justifyContent: "center",
    // alignItems: "flex-end",
  },
  rigthContainer: {
    // width: "20%",
    flexDirection: "column",
  },
  favoriteStarContainer: {
    height: "50%",
    justifyContent: "center",
    // alignItems: 'center'
  },
  scoreTagContainer: {
    height: "50%",
    justifyContent: "center",
    // alignItems: 'center'
  },
  upperContainer: {
    // height: "10%",
    // width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "left",
    // paddingBottom: 10,
  },
  lowerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingTop: 10,
    marginHorizontal: 5,
  },
  scoreTypeTag: {
    fontFamily: "open-sans",
    fontSize: 14,
    color: "white",
    // borderRadius: 15,
    // marginTop: 30,
    marginHorizontal: 5,
    textAlign: "center",
  },
  sayTagBC: {
    backgroundColor: "#18c47f",
  },
  sozTagBC: {
    backgroundColor: "#264653",
  },
  eaTagBC: {
    backgroundColor: "#e9c46a",
  },
  dilTagBC: {
    backgroundColor: "#457b9d",
  },
  tytTagBC: {
    backgroundColor: "#e76f51",
  },
  text: {
    fontFamily: "open-sans",
    fontSize: 14,
    padding: 1,
    textAlign: "center",
  },
  textName: {
    fontFamily: "open-sans",
    fontSize: 16,
    paddingBottom: 2,
    // textAlign: "left",
  },
  textDepartment: {
    fontFamily: "open-sans-bold",
    fontSize: 14,
    textAlign: "left",
  },
});

export default UniversityGridTile;
