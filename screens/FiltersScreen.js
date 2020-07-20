import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Switch,
  Platform,
  FlatList,
  SafeAreaView,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Checkbox } from "react-native-paper";

import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import { CITIES } from "../data/city-data";
import CityGridTile from "../components/CityGridTile";

const FiltersScreen = (props) => {
  const [isPrivateIncluded, setIsPrivateIncluded] = useState(false);

  const renderGridItem = (itemData) => {
    return (
      // <View style={styles.cityGridItem}>
      //   <Text>{itemData.item.name}</Text>
      //   <Checkbox status={"checked"} />
      // </View>

      <CityGridTile name={itemData.item.name} />
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Filtre Seçenekleri</Text>
      <View style={styles.filterContainer}>
        <Text>Özel üniversiteler dahil mi?</Text>
        <Switch
          trackColor={{ true: Colors.primaryColor }} // Color of switch
          thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""} // Colors of head of the switch
          value={isPrivateIncluded}
          onValueChange={(newValue) => setIsPrivateIncluded(newValue)}
        />
      </View>
      <View style={styles.cityListContainer}>
        <FlatList data={CITIES} renderItem={renderGridItem} />
      </View>
    </SafeAreaView>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  return {
    title: "Filtrele",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menü"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
  cityListContainer: {
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
    width: "80%",
    height: "30%",
    maxHeight: "30%",
    margin: 10,
  },
  cityGridItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
});

export default FiltersScreen;
