import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, SafeAreaView, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { SearchBar } from "react-native-elements";

import CityGridTile from "../components/CityGridTile";
import { CITIES } from "../data/city-data";
import HeaderButton from "../components/HeaderButton";
import DefaultText from '../components/DefaultText';

const CitiesFilterScreen = (props) => {
  let selectedCityList = props.navigation.getParam("selectedCities")
    ? props.navigation.getParam("selectedCities")
    : [];

  const [filteredCityList, setFilteredCityList] = useState(
    selectedCityList == undefined ? CITIES : selectedCityList
  );
  const [searchValue, setSearchValue] = useState("");
  const [searchedCities, setSearchedCities] = useState(CITIES);

  useEffect(() => {
    props.navigation.setParams({ savedCities: filteredCityList });
  }, [filteredCityList]);

  const setCheckedCities = (id) => {
    if (selectedCityList) {
      return selectedCityList.indexOf(id) == -1 ? false : true;
    }
    return false;
  };

  const searchFilterHandler = (text) => {
    setSearchValue(text);
    setSearchedCities(CITIES.filter(city => city.name.toLocaleUpperCase().includes(text.toLocaleUpperCase())));
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

  if (searchedCities.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.list}>
          <SearchBar
            style={styles.searchBar}
            placeholder="Şehir ara..."
            onChangeText={(text) => searchFilterHandler(text)}
            value={searchValue}
            platform={Platform.OS}
          />
          <View style={styles.buttomContainer}>
            <DefaultText style={styles.content}>
              Aramanıza uygun şehir bulunamadı...
          </DefaultText>
          </View>

        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.list}>
        <SearchBar
          style={styles.searchBar}
          placeholder="Şehir ara..."
          onChangeText={(text) => searchFilterHandler(text)}
          value={searchValue}
          platform={Platform.OS}
        />
        <FlatList data={searchedCities} renderItem={renderGridCityItem} />
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
          title="UYGULA"
          // iconName="ios-save"
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
  buttomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
  }
});

export default CitiesFilterScreen;
