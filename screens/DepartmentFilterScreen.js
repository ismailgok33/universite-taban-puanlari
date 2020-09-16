import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import DepartmentGridTile from "../components/DepartmentGridTile";
import { DEPARTMENTS } from "../data/department-data";
import HeaderButton from "../components/HeaderButton";

const DepartmentFilterScreen = (props) => {
  let selectedDepartmentList = props.navigation.getParam("selectedDepartments")
    ? props.navigation.getParam("selectedDepartments")
    : [];

  const [filteredDepartmentList, setfilteredDepartmentList] = useState(
    selectedDepartmentList == undefined ? DEPARTMENTS : selectedDepartmentList
  );

  useEffect(() => {
    props.navigation.setParams({ savedDepartments: filteredDepartmentList });
  }, [filteredDepartmentList]);

  const setCheckedDepartments = (name) => {
    if (selectedDepartmentList) {
      return selectedDepartmentList.indexOf(name) == -1 ? false : true;
    }
    return false;
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.list}>
        <FlatList data={DEPARTMENTS} renderItem={renderGridDepartmentItem} />
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
});

export default DepartmentFilterScreen;
