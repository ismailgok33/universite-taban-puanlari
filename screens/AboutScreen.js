import React from "react";
import { View, StyleSheet, SafeAreaView, Button, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import * as Linking from "expo-linking";

import DefaultText from "../components/DefaultText";
import HeaderButton from "../components/HeaderButton";

const AboutScreen = (props) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.iconContainer}>
        <Image
          source={require("../assets/app-icon.png")}
          style={{ height: 256, width: 256 }}
        />
      </View>
      <View style={styles.aboutTextContainer}>
        <DefaultText style={styles.content}>
          XXXXX 2021, 2020 yılı YKS-TYT puan ve sıralamaları içeren üniversite
          ve bölüm seçmenizde size yardımcı olacak resmi olmayan bir
          uygulamadır. Üniversite taban puanları ÖSYM'nin güncel yayınladığı
          verilerden alınmıştır. Hedefinize ulaşmanız dileğiyle... Başarılar.
        </DefaultText>
      </View>

      <View style={styles.buttonContainer}>
        {/* <Button
          style={styles.feedBackButton}
          onPress={() => Linking.openURL('mailto:support@example.com')}
          title="Uygulamayı değerlendir" /> */}
        <Button
          style={styles.feedBackButton}
          onPress={() => Linking.openURL("mailto:support@example.com")}
          title="Geri bildirim gönder"
        />
      </View>
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
    // alignItems: "center",
  },
  aboutTextContainer: {
    flex: 1,
    height: "50%",
    justifyContent: "center",
    // alignItems: "center",
  },
  iconContainer: {
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
  },
  content: {
    fontSize: 16,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "70%",
  },
  buttonContainer: {
    height: "20%",
    alignItems: "center",
  },
  feedBackButton: {
    alignSelf: "center",
    alignItems: "center",
  },
});

export default AboutScreen;
