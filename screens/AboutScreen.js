import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import DefaultText from "../components/DefaultText";
import HeaderButton from "../components/HeaderButton";

const AboutScreen = (props) => {
  return (
    <SafeAreaView style={styles.screen}>
      <DefaultText style={styles.iconContainer}>
        Burada ikon olabilir
      </DefaultText>
      <DefaultText style={styles.content}>
        XXXXX 2021, 2020 yılı YKS-TYT puan ve sıralamarı içeren üniversite ve
        bölüm seçmenizde size yardımcı olacak resmi olmayan bir uygulamadır.
        Üniversite taban puanları ÖSYM'nin güncel yayınladığı verilerden
        alınmıştır. Hedefinize ulaşmanız dileğiyle... Başarılar.
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
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    width: "100%",
    height: "30%",
  },
  content: {
    fontSize: 16,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "70%",
  },
});

export default AboutScreen;
