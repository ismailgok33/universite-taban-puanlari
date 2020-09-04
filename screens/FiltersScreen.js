import React, { useState, useCallback, useEffect } from "react";
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
import { useDispatch } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import { CITIES } from "../data/city-data";
import CityGridTile from "../components/CityGridTile";
import { setFilters } from "../store/actions/universities";

const FiltersScreen = (props) => {
  const [isStateOnly, setIsStateOnly] = useState(false);
  const [showFourYearUniversity, setShowFourYearUniversity] = useState(false);
  const [showTwoYearUniversity, setShowTwoYearUniversity] = useState(false);
  const [filteredCityList, setFilteredCityList] = useState([]);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      isState: isStateOnly,
      show4Years: showFourYearUniversity,
      show2Years: showTwoYearUniversity,
      filteredCities: filteredCityList,
    };

    dispatch(setFilters(appliedFilters));
  }, [
    isStateOnly,
    showFourYearUniversity,
    showTwoYearUniversity,
    filteredCityList,
    dispatch,
  ]);

  useEffect(() => {
    props.navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  const renderGridItem = (itemData) => {
    const handleCheckFilters = (id, status) => {
      let index = filteredCityList.indexOf(id);
      if (index == -1) {
        setFilteredCityList([...filteredCityList, id]);
      } else {
        filteredCityList.splice(index, 1);
        setFilteredCityList(filteredCityList);
      }
    };
    return (
      <CityGridTile
        name={itemData.item.name}
        id={itemData.item.id}
        handleCheckFilters={(name, status) => handleCheckFilters(name, status)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Filtre Seçenekleri</Text>
      <View style={styles.filterContainer}>
        <Text>Yalnızca devlet üniversitelerini göster</Text>
        <Switch
          trackColor={{ true: Colors.primaryColor }} // Color of switch
          thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""} // Colors of head of the switch
          value={isStateOnly}
          onValueChange={(newValue) => setIsStateOnly(newValue)}
        />
      </View>
      <View style={styles.filterContainer}>
        <Text>Lisans bölümlerini göster</Text>
        <Switch
          trackColor={{ true: Colors.primaryColor }} // Color of switch
          thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""} // Colors of head of the switch
          value={showFourYearUniversity}
          onValueChange={(newValue) => setShowFourYearUniversity(newValue)}
        />
      </View>
      <View style={styles.filterContainer}>
        <Text>Önlisans bölümlerini göster</Text>
        <Switch
          trackColor={{ true: Colors.primaryColor }} // Color of switch
          thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""} // Colors of head of the switch
          value={showTwoYearUniversity}
          onValueChange={(newValue) => setShowTwoYearUniversity(newValue)}
        />
      </View>
      <Text style={styles.text}>Şehir seçiniz</Text>
      <View style={styles.cityList}>
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
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam("save")}
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
  text: {
    paddingTop: 20,
  },
  cityList: {
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
    height: "50%",
    maxHeight: "50%",
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
