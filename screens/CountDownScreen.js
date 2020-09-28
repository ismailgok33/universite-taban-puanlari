import React from "react";
import { View, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { ProgressChart } from "expo-chart-kit";
import { Divider } from "react-native-elements";

import DefaultText from "../components/DefaultText";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const CountDownScreen = (props) => {
  const dataTyt = [0.9];
  const dataAyt = [0.8];
  const dataYdt = [1];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tytContainer}>
        <DefaultText style={styles.text}>
          X sınavına kalan süre: '99:99:99'
        </DefaultText>
        <ProgressChart
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
