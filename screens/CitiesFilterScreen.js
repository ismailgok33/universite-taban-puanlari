import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CityGridTile from "../components/CityGridTile";
import { CITIES } from "../data/city-data";
import HeaderButton from "../components/HeaderButton";

const CitiesFilterScreen = (props) => {
  let selectedCityList = props.navigation.getParam("selectedCities")
    ? props.navigation.getParam("selectedCities")
    : [];

  const [filteredCityList, setFilteredCityList] = useState(
    selectedCityList == undefined ? [] : selectedCityList
  );

  console.log("filteredCityList:");
  console.log(filteredCityList);

  useEffect(() => {
    props.navigation.setParams({ savedCities: filteredCityList });
  }, [filteredCityList]);

  const setCheckedCities = (id) => {
    if (selectedCityList) {
      return selectedCityList.indexOf(id) == -1 ? false : true;
    }
    return false;
  };

  const renderGridCityItem = (itemData) => {
    let isChecked = true;
    const handleCheckFilters = (id, status) => {
      let index = filteredCityList.indexOf(id);
      if (index == -1) {
        setFilteredCityList([...filteredCityList, id]);
        // isChecked = true;
      } else {
        filteredCityList.splice(index, 1);
        setFilteredCityList(filteredCityList);
        // isChecked = false;
      }
      console.log("isChecked:");
      console.log(isChecked);
    };
    return (
      <CityGridTile
        name={itemData.item.name}
        id={itemData.item.id}
        handleCheckFilters={(id, status) => handleCheckFilters(id, status)}
        isChecked={(id) => setCheckedCities(id)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.list}>
        <FlatList data={CITIES} renderItem={renderGridCityItem} />
      </View>
    </SafeAreaView>
  );
};

CitiesFilterScreen.navigationOptions = (navData) => {
  return {
    title: "Şehir Filtrele",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={() => {
            navData.navigation.navigate("Filters", {
              savedCities: navData.navigation.getParam("savedCities"),
            });
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});

export default CitiesFilterScreen;
