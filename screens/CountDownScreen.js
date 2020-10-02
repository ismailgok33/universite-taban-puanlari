import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { ProgressChart } from "expo-chart-kit";
import { Divider } from "react-native-elements";
import CountDown from 'react-native-countdown-component';
import moment from 'moment';

import DefaultText from "../components/DefaultText";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const CountDownScreen = (props) => {
  // const [tytDate, setTytDate] = useState();

  const dataTyt = [0.9];
  const dataAyt = [0.8];
  const dataYdt = [1];

  const now = moment();
  const tytDate = moment("2020 10 03 10:00", "YYYY MM DD HH:SS");

  const difference = (tytDate - now) / 100;
  console.log('now: ' + now);
  console.log('tytDate: ' + tytDate);
  console.log('difference: ' + difference);

  // var expirydate = '2020-10-2 17:00:45';//You can set your own date-time
  // //Let suppose we have to show the countdown for above date-time 

  // var diffr = moment.duration(moment(expirydate).diff(moment(date)));
  // //difference of the expiry date-time given and current date-time

  // var hours = parseInt(diffr.asHours());
  // var minutes = parseInt(diffr.minutes());
  // var seconds = parseInt(diffr.seconds());

  // var d = hours * 60 * 60 + minutes * 60 + seconds;
  // setTytDate(d);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tytContainer}>
        <DefaultText style={styles.text}>
          X sınavına kalan süre: '99:99:99'
        </DefaultText>
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
          until={difference}
          //duration of countdown in seconds
          timetoShow={('D', 'H')}
          //formate to show
          onFinish={() => alert('finished')}
          //on Finish call
          onPress={() => alert('hello')}
          //on Press call
          size={20}
        />
      </View>

      <View style={{ marginVertical: "3%" }}>
        <Divider style={{ backgroundColor: "#777f7c90" }} />
      </View>

      <View style={styles.aytContainer}>
        <DefaultText style={styles.text}>
          X sınavına kalan süre: '99:99:99'
        </DefaultText>
        <ProgressChart
          data={dataAyt}
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
        />
      </View>

      <View style={{ marginVertical: "3%" }}>
        <Divider style={{ backgroundColor: "#777f7c90" }} />
      </View>

      <View style={styles.ydtContainer}>
        <DefaultText style={styles.text}>
          X sınavına kalan süre: '99:99:99'
        </DefaultText>
        <ProgressChart
          data={dataYdt}
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
    // width: "100%",
    // height: "30%",
    flex: 1,
    marginTop: "5%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 3,
  },
  aytContainer: {
    // width: "100%",
    // height: "30%",
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 3,
  },
  ydtContainer: {
    // width: "100%",
    // height: "30%",
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 3,
    marginBottom: "5%",
  },
  text: {
    textAlign: "center",
  },
});

export default CountDownScreen;
