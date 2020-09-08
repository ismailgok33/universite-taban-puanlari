import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import DefaultText from "../components/DefaultText";
import HeaderButton from "../components/HeaderButton";

const AboutScreen = (props) => {
  return (
    <SafeAreaView style={styles.screen}>
      <DefaultText style={styles.content}>
        Hakkında sayfası. Burada uygulama hakkında kısa bilgiler yer alacaktır.
      </DefaultText>
    </SafeAreaView>
  );
};

AboutScreen.navigationOptions = (navData) => {
  return {
    title: "Hakkında",
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
    // justifyContent: "center",
    alignItems: "center",
  },
  content: {
    fontSize: 14,
    padding: 20,
    paddingTop: 40,
  },
});

export default AboutScreen;
