import React from "react";
import { View, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { ProgressChart } from 'expo-chart-kit'

import DefaultText from "../components/DefaultText";
import HeaderButton from "../components/HeaderButton";

const CountDownScreen = (props) => {
  const data = [0.5];


  return (
    <SafeAreaView style={styles.container}>
      <DefaultText>X sınavına kalan süre: '99:99:99'</DefaultText>
      <ProgressChart
        data={data}
        width={Dimensions.get('window').width}
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
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
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CountDownScreen;
