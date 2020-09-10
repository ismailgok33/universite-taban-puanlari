import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import DepartmentGridTile from "../components/DepartmentGridTile";
import { DEPARTMENTS } from "../data/department-data";
import HeaderButton from "../components/HeaderButton";

const DepartmentFilterScreen = (props) => {
  const [filteredDepartmentList, setfilteredDepartmentList] = useState(
    props.navigation.getParam("selectedDepartments") == undefined
      ? []
      : props.navigation.getParam("selectedDepartments")
  );

  useEffect(() => {
    props.navigation.setParams({ savedDepartments: filteredDepartmentList });
  }, [filteredDepartmentList]);

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
          title="Save"
          iconName="ios-save"
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
