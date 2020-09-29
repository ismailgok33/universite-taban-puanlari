import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, SafeAreaView, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { SearchBar } from "react-native-elements";

import DepartmentGridTile from "../components/DepartmentGridTile";
import { DEPARTMENTS } from "../data/department-data";
import HeaderButton from "../components/HeaderButton";
import DefaultText from '../components/DefaultText';

const DepartmentFilterScreen = (props) => {
  let selectedDepartmentList = props.navigation.getParam("selectedDepartments")
    ? props.navigation.getParam("selectedDepartments")
    : [];

  const [filteredDepartmentList, setfilteredDepartmentList] = useState(
    selectedDepartmentList == undefined ? DEPARTMENTS : selectedDepartmentList
  );
  const [searchValue, setSearchValue] = useState("");
  const [searchedDepartments, setSearchedDepartments] = useState(DEPARTMENTS);

  useEffect(() => {
    props.navigation.setParams({ savedDepartments: filteredDepartmentList });
  }, [filteredDepartmentList]);

  const setCheckedDepartments = (name) => {
    if (selectedDepartmentList) {
      return selectedDepartmentList.indexOf(name) == -1 ? false : true;
    }
    return false;
  };

  const searchFilterHandler = (text) => {
    setSearchValue(text);
    setSearchedDepartments(DEPARTMENTS.filter(department => department.name.toLocaleUpperCase().includes(text.toLocaleUpperCase())));
  };

  const renderGridDepartmentItem = (itemData) => {
    const handleCheckFilters = (name, status) => {
      let index = filteredDepartmentList.indexOf(name);
      if (index == -1) {
        setfilteredDepartmentList([...filteredDepartmentList, name]);
      } else {
        filteredDepartmentList.splice(index, 1);
        setfilteredDepartmentList(filteredDepartmentList);
      }
    };
    return (
      <DepartmentGridTile
        name={itemData.item.name}
        id={itemData.item.id}
        handleCheckFilters={(name, status) => handleCheckFilters(name, status)}
        isChecked={(name) => setCheckedDepartments(name)}
      />
    );
  };

  if (searchedDepartments.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.list}>
          <SearchBar
            style={styles.searchBar}
            placeholder="Bölüm ara..."
            onChangeText={(text) => searchFilterHandler(text)}
            value={searchValue}
            platform={Platform.OS}
          />
          <View style={styles.buttomContainer}>
            <DefaultText style={styles.content}>
              Aramanıza uygun bölüm bulunamadı...
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
          placeholder="Bölüm ara..."
          onChangeText={(text) => searchFilterHandler(text)}
          value={searchValue}
          platform={Platform.OS}
        />
        <FlatList data={searchedDepartments} renderItem={renderGridDepartmentItem} />
      </View>
    </SafeAreaView>
  );
};

DepartmentFilterScreen.navigationOptions = (navData) => {
  return {
    title: "Bölüm Filtrele",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="UYGULA"
          // iconName="ios-save"
          onPress={() => {
            navData.navigation.navigate("Filters", {
              savedDepartments: navData.navigation.getParam("savedDepartments"),
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

export default DepartmentFilterScreen;
