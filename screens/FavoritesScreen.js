import React from "react";
import { StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { UNIVERSITIES } from "../data/university-data";
import UniversityList from "../components/UniversityList";
import HeaderButton from "../components/HeaderButton";

const FavoritesScreen = (props) => {
  const favs = UNIVERSITIES.filter(
    (uni) => uni.id === "uni_1" || uni.id === "uni_2"
  );

  return <UniversityList data={favs} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    title: "Favoriler",
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
