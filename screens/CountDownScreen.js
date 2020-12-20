import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { ProgressChart } from "expo-chart-kit";
import { Divider } from "react-native-elements";
import CountDown from "react-native-countdown-component";
import moment from "moment";
import Constants from "expo-constants";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob";

import DefaultText from "../components/DefaultText";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const CountDownScreen = (props) => {
  const testID = "ca-app-pub-3940256099942544/6300978111";
  const productionID = "ca-app-pub-6180320592686930/5442555870";

  const adUnitID = Constants.isDevice && !__DEV__ ? productionID : testID;

  const now = moment();
  const tytDate = moment("2020-10-05 10:00");
  const aytDate = moment("2020-10-05 10:00");
  const ydtDate = moment("2020-10-05 10:00");

  const tytDifference = (tytDate - now) / 1000;
  const aytDifference = (aytDate - now) / 1000;
  const ydtDifference = (ydtDate - now) / 1000;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tytContainer}>
        <DefaultText style={styles.text}>TYT sınavına kalan süre:</DefaultText>
        <CountDown
          until={tytDifference}
          timetoShow={("D", "H")}
          digitStyle={{ backgroundColor: Colors.accentColor }}
          size={40}
        />
      </View>

      <View style={{ marginVertical: "3%" }}>
        <Divider style={{ backgroundColor: "#777f7c90" }} />
      </View>

      <View style={styles.aytContainer}>
        <DefaultText style={styles.text}>AYT sınavına kalan süre:</DefaultText>
        <CountDown
          until={aytDifference}
          timetoShow={("D", "H")}
          digitStyle={{ backgroundColor: Colors.accentColor }}
          size={40}
        />
      </View>

      <View style={{ marginVertical: "3%" }}>
        <Divider style={{ backgroundColor: "#777f7c90" }} />
      </View>

      <View style={styles.ydtContainer}>
        <DefaultText style={styles.text}>YDT sınavına kalan süre:</DefaultText>
        <CountDown
          until={ydtDifference}
          timetoShow={("D", "H")}
          digitStyle={{ backgroundColor: Colors.accentColor }}
          size={40}
        />
      </View>
      <AdMobBanner
        bannerSize="smartBannerPortrait"
        adUnitID={adUnitID} // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds={true}
        style={{ alignSelf: "center" }}
        // onDidFailToReceiveAdWithError={this.bannerError}
      />
    </SafeAreaView>
  );
};

CountDownScreen.navigationOptions = (navData) => {
  return {
    title: "Geri Sayım",
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
  container: {
    flex: 1,
  },
  tytContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  aytContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ydtContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 24,
  },
});

export default CountDownScreen;
