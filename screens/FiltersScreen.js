import React, { useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Switch,
  Platform,
  FlatList,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import { CITIES } from "../data/city-data";
import { DEPARTMENTS } from "../data/department-data";
import { setFilters } from "../store/actions/universities";

const FiltersScreen = (props) => {
  const [noStateFilter, setNoStateFilter] = useState(false);
  const [noPrivateFilter, setNoPrivateFilter] = useState(false);
  const [noFourYearUniversity, setNoFourYearUniversity] = useState(false);
  const [noTwoYearUniversity, setNoTwoYearUniversity] = useState(false);
  const [noEnglishDepartments, setNoEnglishDepartments] = useState(false);
  const [noTurkishDepartments, setNoTurkishDepartments] = useState(false);

  let savedCityList = props.navigation.getParam("savedCities");
  let savedDepartmentList = props.navigation.getParam("savedDepartments");

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      noState: noStateFilter,
      noPrivate: noPrivateFilter,
      no4Years: noFourYearUniversity,
      no2Years: noTwoYearUniversity,
      noEnglish: noEnglishDepartments,
      noTurkish: noTurkishDepartments,
      // filteredCities: filteredCityList,
      filteredCities: savedCityList,
      // filteredDepartments: filteredDepartmentList,
      filteredDepartments: savedDepartmentList,
    };

    console.log("savedCities:");
    console.log(savedCityList);

    console.log("savedDepartments:");
    console.log(savedDepartmentList);

    dispatch(setFilters(appliedFilters));
  }, [
    noStateFilter,
    noPrivateFilter,
    noFourYearUniversity,
    noTwoYearUniversity,
    noEnglishDepartments,
    noTurkishDepartments,
    // filteredCityList,
    savedCityList,
    // filteredDepartmentList,
    savedDepartmentList,
    dispatch,
  ]);

  console.log("savedDepartmentList:");
  console.log(savedDepartmentList);

  useEffect(() => {
    props.navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  const mapCityIdtoName = (idList) => {
    let cityNameList = [];
    idList.forEach((id) => {
      CITIES.forEach((city) => {
        if (city.id === id) {
          cityNameList.push(city.name);
        }
      });
    });
    return cityNameList;
  };

  const showCityTags = () => {
    if (
      !savedCityList ||
      savedCityList.length === CITIES.length ||
      savedCityList.length === 0
    ) {
      return "Tümü";
    } else {
      return mapCityIdtoName(savedCityList);
    }
  };

  const showDepartmentTags = () => {
    if (
      !savedDepartmentList ||
      savedDepartmentList.length === DEPARTMENTS.length ||
      savedDepartmentList.length === 0
    ) {
      return "Tümü";
    } else {
      return savedDepartmentList;
    }
  };

  const deleteCityFilterHandler = () => {
    props.navigation.setParams({ savedCities: undefined });
    savedCityList = [];
  };

  const deleteDepartmentFilterHandler = () => {
    props.navigation.setParams({
      savedDepartments: undefined,
    });
    savedDepartmentList = [];
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Filtre Seçenekleri</Text>

      <View style={styles.filterContainer}>
        <Text>Devlet üniversitelerini gösterme</Text>
        <Switch
          trackColor={{ true: Colors.primaryColor }} // Color of switch
          thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""} // Colors of head of the switch
          value={noStateFilter}
          onValueChange={(newValue) => setNoStateFilter(newValue)}
        />
      </View>
      <View style={styles.filterContainer}>
        <Text>Özel/Vakıf üniversiteleri gösterme</Text>
        <Switch
          trackColor={{ true: Colors.primaryColor }} // Color of switch
          thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""} // Colors of head of the switch
          value={noPrivateFilter}
          onValueChange={(newValue) => setNoPrivateFilter(newValue)}
        />
      </View>

      <View style={styles.filterContainer}>
        <Text>Lisans bölümlerini gösterme</Text>
        <Switch
          trackColor={{ true: Colors.primaryColor }} // Color of switch
          thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""} // Colors of head of the switch
          value={noFourYearUniversity}
          onValueChange={(newValue) => setNoFourYearUniversity(newValue)}
        />
      </View>

      <View style={styles.filterContainer}>
        <Text>Önlisans bölümlerini gösterme</Text>
        <Switch
          trackColor={{ true: Colors.primaryColor }} // Color of switch
          thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""} // Colors of head of the switch
          value={noTwoYearUniversity}
          onValueChange={(newValue) => setNoTwoYearUniversity(newValue)}
        />
      </View>

      <View style={styles.filterContainer}>
        <Text>İngilizce bölümlerini gösterme</Text>
        <Switch
          trackColor={{ true: Colors.primaryColor }} // Color of switch
          thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""} // Colors of head of the switch
          value={noEnglishDepartments}
          onValueChange={(newValue) => setNoEnglishDepartments(newValue)}
        />
      </View>

      <View style={styles.filterContainer}>
        <Text>Türkçe bölümlerini gösterme</Text>
        <Switch
          trackColor={{ true: Colors.primaryColor }} // Color of switch
          thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""} // Colors of head of the switch
          value={noTurkishDepartments}
          onValueChange={(newValue) => setNoTurkishDepartments(newValue)}
        />
      </View>

      <View style={styles.filterButtonContainer}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("CityFilter", {
              selectedCities: savedCityList,
            })
          }
          style={styles.filterButton}
        >
          <Text>{"Şehir: " + showCityTags()}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={deleteCityFilterHandler}
          style={styles.deleteFilterButton}
        >
          <Text> Temizle </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.filterButtonContainer}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("DepartmentFilter", {
              selectedDepartments: props.navigation.getParam(
                "savedDepartments"
              ),
            })
          }
          style={styles.filterButton}
        >
          <Text>{"Bölüm: " + showDepartmentTags()}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={deleteDepartmentFilterHandler}
          style={styles.deleteFilterButton}
        >
          <Text> Temizle </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  const saveAndListUniversities = () => {
    navData.navigation.getParam("save");
    navData.navigation.navigate("UniversityFavs");
  };

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
  filterButtonContainer: {
    flex: 1,
    width: "80%",
    height: "20%",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    maxHeight: "50%",
    margin: 10,
  },
  filterButton: {
    flex: 1,
    width: "80%",
    alignSelf: "flex-start",
  },
  deleteFilterButton: {
    flex: 1,
    width: "20%",
    backgroundColor: "red",
    alignSelf: "flex-end",
  },
});

export default FiltersScreen;
