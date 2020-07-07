import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";

import { UNIVERSITIES } from "../data/university-data";

import Colors from "../constants/Colors";

const UniversityListScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate("UniversityDetail", {
            universityId: itemData.item.id,
          });
        }}
      >
        <View>
          <Text> {itemData.item.name} </Text>
          <Text> {itemData.item.department} </Text>
          <Text> {itemData.item.score} </Text>
          <Text> {itemData.item.placement} </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList data={UNIVERSITIES} renderItem={renderGridItem} />
    </View>
  );
};

UniversityListScreen.navigationOptions = {
  title: "Üniversite Listesi",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default UniversityListScreen;
