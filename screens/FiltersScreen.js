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
import DefaultText from "../components/DefaultText";

import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import { CITIES } from "../data/city-data";
import { DEPARTMENTS } from "../data/department-data";
import { setFilters } from "../store/actions/universities";

const FiltersScreen = (props) => {
  const [noStateFilter, setNoStateFilter] = useState(false);
  const [noPrivateFilter, setNoPrivateFilter] = useState(false);
  const [noFullScholarship, setNoFullScholarship] = useState(false);
  const [no75Scholarship, setNo75Scholarship] = useState(false);
  const [no50Scholarship, setNo50Scholarship] = useState(false);
  const [no25Scholarship, setNo25Scholarship] = useState(false);
  const [noFullyPaid, setNoFullyPaid] = useState(false);
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
      noFullScholarship: noFullScholarship,
      no75Scholarship: no75Scholarship,
      no50Scholarship: no50Scholarship,
      no25Scholarship: no25Scholarship,
      noFullyPaid: noFullyPaid,
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
    noFullScholarship,
    no75Scholarship,
    no50Scholarship,
    no25Scholarship,
    noFullyPaid,
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

      <View style={styles.filterButtonContainer}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("CityFilter", {
              selectedCities: savedCityList,
            })
          }
          style={styles.filterButton}
        >
          <DefaultText style={styles.textHeader}>Şehir seçiniz.</DefaultText>
          <DefaultText style={styles.textDetail}>{'"' + showCityTags() + '" '}</DefaultText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={deleteCityFilterHandler}
          style={styles.deleteFilterButton}
        >
          <DefaultText style={styles.deleteText}> Temizle </DefaultText>
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
          <DefaultText style={styles.textHeader}>Bölüm seçiniz.</DefaultText>
          <DefaultText style={styles.textDetail}>{'"' + showDepartmentTags() + '" '}</DefaultText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={deleteDepartmentFilterHandler}
          style={styles.deleteFilterButton}
        >
          <DefaultText style={styles.deleteText}> Temizle </DefaultText>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.seperatorLine}></View> */}

      <DefaultText style={styles.filterCoupleHeader}> Ücret Ayarları </DefaultText>

      <View style={styles.filterCouple}>
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
          <Text>Tam burslu bölümleri gösterme</Text>
          <Switch
            trackColor={{ true: Colors.primaryColor }} // Color of switch
            thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""} // Colors of head of the switch
            value={noFullScholarship}
            onValueChange={(newValue) => setNoFullScholarship(newValue)}
          />
        </View>
        <View style={styles.filterContainer}>
          <Text>%75 burslu bölümleri gösterme</Text>
          <Switch
            trackColor={{ true: Colors.primaryColor }} // Color of switch
            thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""} // Colors of head of the switch
            value={no75Scholarship}
            onValueChange={(newValue) => setNo75Scholarship(newValue)}
          />
        </View>
        <View style={styles.filterContainer}>
          <Text>%50 burslu bölümleri gösterme</Text>
          <Switch
            trackColor={{ true: Colors.primaryColor }} // Color of switch
            thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""} // Colors of head of the switch
            value={no50Scholarship}
            onValueChange={(newValue) => setNo50Scholarship(newValue)}
          />
        </View>
        <View style={styles.filterContainer}>
          <Text>%25 burslu bölümleri gösterme</Text>
          <Switch
            trackColor={{ true: Colors.primaryColor }} // Color of switch
            thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""} // Colors of head of the switch
            value={no25Scholarship}
            onValueChange={(newValue) => setNo25Scholarship(newValue)}
          />
        </View>
        <View style={styles.filterContainer}>
          <Text>Burssuz/Ücretli bölümleri gösterme</Text>
          <Switch
            trackColor={{ true: Colors.primaryColor }} // Color of switch
            thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""} // Colors of head of the switch
            value={noFullyPaid}
            onValueChange={(newValue) => setNoFullyPaid(newValue)}
          />
        </View>
      </View>


      {/* <View style={styles.seperatorLine}></View> */}

      <DefaultText style={styles.filterCoupleHeader}> Öğretim Yılı Ayarları </DefaultText>

      <View style={styles.filterCouple}>

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
      </View>

      {/* <View style={styles.seperatorLine}></View> */}

      <DefaultText style={styles.filterCoupleHeader}> Öğretim Dili Ayarları </DefaultText>

      <View style={styles.filterCouple}>

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
          title="UYGULA"
          // iconName="ios-save"
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
    justifyContent: 'space-between',
    paddingVertical: 10
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterCoupleHeader: {
    fontFamily: 'open-sans-bold',
    fontSize: 14,
    textDecorationLine: 'underline'
  },
  filterCouple: {
    width: '100%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: 'white',
    padding: 5,
    justifyContent: 'space-between',
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    margin: 2
  },
  text: {
    paddingTop: 20,
  },
  filterButtonContainer: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%',
    borderColor: 'gray',
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: 'white',
  },
  filterButton: {
    // flex: 1,
    width: "80%",
    // borderColor: 'gray',
    // borderWidth: 1,
    paddingVertical: 10,
  },
  deleteFilterButton: {
    // flex: 1,
    width: "20%",
    // backgroundColor: "red",
    paddingVertical: 10
  },
  textHeader: {
    fontFamily: 'open-sans',
    fontSize: 16,
    paddingHorizontal: 10
  },
  textDetail: {
    paddingTop: 5,
    paddingHorizontal: 10,
    fontFamily: 'open-sans',
    fontSize: 12,
    fontStyle: 'italic'
  },
  deleteText: {
    fontFamily: 'open-sans-bold',
    // color: Colors.accentColor,
    color: 'darkblue',
    fontSize: 14,
    textAlign: 'center',
    // textDecorationLine: 'underline'
  },
  seperatorLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    margin: 10,
    width: '100%'

  }
});

export default FiltersScreen;
