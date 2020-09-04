import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

// import { UNIVERSITIES } from "../data/university-data";
import UniversityList from "../components/UniversityList";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

const FavoritesScreen = (props) => {
  const avaibleUniversities = useSelector(
    (state) => state.universitiesReducer.favoriteUniversities
  );

  console.log("avaibleUniversities:");
  console.log(avaibleUniversities);

  if (avaibleUniversities.length === 0 || !avaibleUniversities) {
    return (
      <View style={styles.content}>
        <DefaultText>Favori üniversite bulunamadı.</DefaultText>
      </View>
    );
  }

  return (
    <UniversityList data={avaibleUniversities} navigation={props.navigation} />
  );
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
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
