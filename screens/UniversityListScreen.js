import React from "react";
import { StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import UniversityList from "../components/UniversityList";
import { UNIVERSITIES } from "../data/university-data";
import HeaderButton from "../components/HeaderButton";

const UniversityListScreen = (props) => {
  return <UniversityList data={UNIVERSITIES} navigation={props.navigation} />;
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
  };
};

export default UniversityListScreen;
