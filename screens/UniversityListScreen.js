import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import UniversityList from "../components/UniversityList";
// import { UNIVERSITIES } from "../data/university-data";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

const UniversityListScreen = (props) => {
  const avaibleUniversities = useSelector(
    (state) => state.universitiesReducer.filteredUniversities
  );

  if (avaibleUniversities.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>
          Üniversite bulunamadı. Filtreleri kontrol ediniz.
        </DefaultText>
      </View>
    );
  }

  return (
    <UniversityList data={avaibleUniversities} navigation={props.navigation} />
  );
};

UniversityListScreen.navigationOptions = (navData) => {
  return {
    title: "Üniversite Listesi",
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
          title="Filtre"
          // iconName="filter"
          onPress={() => {
            navData.navigation.navigate("Filter");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UniversityListScreen;
