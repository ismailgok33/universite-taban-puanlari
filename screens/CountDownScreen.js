import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { ProgressChart } from "expo-chart-kit";
import { Divider } from "react-native-elements";
import CountDown from "react-native-countdown-component";
import moment from "moment";

import DefaultText from "../components/DefaultText";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const CountDownScreen = (props) => {
  // const [tytDate, setTytDate] = useState();

  const now = moment();
  const tytDate = moment("2020-10-05 10:00");
  const aytDate = moment("2020-10-06 10:00");
  const ydtDate = moment("2020-10-12 10:00");

  const tytDifference = (tytDate - now) / 1000;
  const aytDifference = (aytDate - now) / 1000;
  const ydtDifference = (ydtDate - now) / 1000;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tytContainer}>
        <DefaultText style={styles.text}>TYT sınavına kalan süre:</DefaultText>
        {/* <ProgressChart
          data={dataTyt}
          width={Dimensions.get("window").width - 50}
          height={Dimensions.get("window").height / 5}
          chartConfig={{
            backgroundColor: Colors.accentColor,
            backgroundGradientFrom: Colors.accentColor,
            backgroundGradientTo: Colors.accentColor,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            borderRadius: 3,
            alignSelf: "center",
          }}
        /> */}
        <CountDown
          // until={tytDate}
          until={tytDifference}
          timetoShow={("D", "H")}
          digitStyle={{ backgroundColor: Colors.accentColor }}
          // timeLabelStyle={{ color: Colors.primaryColor }}
          // digitTxtStyle={{ color: Colors.primaryColor }}
          // onFinish={() => alert("finished")}
          // onPress={() => alert("hello")}
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
          // onFinish={() => alert("finished")}
          // onPress={() => alert("hello")}
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
          // onFinish={() => alert("finished")}
          // onPress={() => alert("hello")}
          size={40}
        />
      </View>
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
