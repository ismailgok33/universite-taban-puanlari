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
import { Checkbox } from "react-native-paper";
import { useDispatch } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import { CITIES } from "../data/city-data";
import { DEPARTMENTS } from "../data/department-data";
import CityGridTile from "../components/CityGridTile";
import DepartmentGridTile from "../components/DepartmentGridTile";
import { setFilters } from "../store/actions/universities";

const FiltersScreen = (props) => {
  const [isStateOnly, setIsStateOnly] = useState(false);
  const [showFourYearUniversity, setShowFourYearUniversity] = useState(false);
  const [showTwoYearUniversity, setShowTwoYearUniversity] = useState(false);
  const [filteredCityList, setFilteredCityList] = useState([]);
  const [filteredDepartmentList, setfilteredDepartmentList] = useState([]);

  let savedCityList = props.navigation.getParam("savedCities");
  let savedDepartmentList = props.navigation.getParam("savedDepartments");

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      isState: isStateOnly,
      show4Years: showFourYearUniversity,
      show2Years: showTwoYearUniversity,
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
    isStateOnly,
    showFourYearUniversity,
    showTwoYearUniversity,
    // filteredCityList,
    savedCityList,
    // filteredDepartmentList,
    savedDepartmentList,
    dispatch,
  ]);

  useEffect(() => {
    props.navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

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
      {/* <Text style={styles.text}>Şehir seçiniz</Text> */}
      <View style={styles.filterButtonContainer}>
        {/* <Button
          onPress={() =>
            props.navigation.navigate("CityFilter", {
              selectedCities: props.navigation.getParam("savedCities"),
            })
          }
          title={"Şehir filtrele: " + savedCityList ? savedCityList : "Tümü"}
          color="#a2a6ba"
          accessibilityLabel="Şehir filtrelemek için tıklayınız"
          style={styles.button}
        /> */}
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("CityFilter", {
              selectedCities: savedCityList,
            })
          }
          style={(styles.button, { backgroundColor: "#a2a6ba" })}
        >
          <Text>
            {"Şehir filtrele: " + (savedCityList ? savedCityList : "Tümü")}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.filterButtonContainer}>
        {/* <Button
          onPress={() =>
            props.navigation.navigate("DepartmentFilter", {
              selectedDepartments: props.navigation.getParam(
                "savedDepartments"
              ),
            })
          }
          title={
            "Bölüm filtrele: " + savedDepartmentList
              ? savedDepartmentList
              : "Tümü"
          }
          color="#a2a6ba"
          accessibilityLabel="Bölüm filtrelemek için tıklayınız"
          style={styles.button}
        /> */}
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("DepartmentFilter", {
              selectedDepartments: props.navigation.getParam(
                "savedDepartments"
              ),
            })
          }
          style={(styles.button, { backgroundColor: "#a2a6ba" })}
        >
          <Text>
            {"Bölüm filtrele: " +
              (savedDepartmentList ? savedDepartmentList : "Tümü")}
          </Text>
        </TouchableOpacity>
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
  filterButtonContainer: {
    flex: 1,
    width: "80%",
    height: "20%",
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
  deparmentList: {
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
