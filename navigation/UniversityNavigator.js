import React from "react";
import { Platform, Text, Image, StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import UniversityListScreen from "../screens/UniversityListScreen";
// import UniversityDetailScreen from "../screens/UniversityDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import Colors from "../constants/Colors";
import AboutScreen from "../screens/AboutScreen";
import CitiesFilterScreen from "../screens/CitiesFilterScreen";
import DepartmentFilterScreen from "../screens/DepartmentFilterScreen";
import CountDownScreen from "../screens/CountDownScreen";
import CustomDrawerMenu from "../components/CustomDrawerMenu";

const screenStackConfig = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    },
    headerTitleStyle: {
      fontFamily: "open-sans-bold",
      fontWeight: "100",
    },
    headerBackTitleStyle: {
      fontFamily: "open-sans",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  },
};

const UniversityNavigator = createStackNavigator(
  {
    UniversityList: UniversityListScreen,
  },
  screenStackConfig
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
  },
  screenStackConfig
);

const screenTabConfig = {
  Universities: {
    screen: UniversityNavigator,
    navigationOptions: {
      tabBarLabel: "Üniversiteler",
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-school" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}> Üniversiteler </Text>
        ) : (
          "Üniversiteler"
        ),
    },
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarLabel: "Favoriler",
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-heart" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}> Favoriler </Text>
        ) : (
          "Favoriler"
        ),
    },
  },
};

const UniversityFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(screenTabConfig, {
        activeColor: "white",
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor,
        },
      })
    : createBottomTabNavigator(screenTabConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: "open-sans-bold",
          },
          activeTintColor: Colors.accentColor,
          //   inactiveTintColor: "",
        },
      });

const FiltersStackNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
    CityFilter: CitiesFilterScreen,
    DepartmentFilter: DepartmentFilterScreen,
  },
  screenStackConfig
);

const AboutStackNavigator = createStackNavigator(
  {
    About: AboutScreen,
  },
  screenStackConfig
);

const CountDownStackNavigator = createStackNavigator(
  {
    CountDown: CountDownScreen,
  },
  screenStackConfig
);

const DrawerNavigator = createDrawerNavigator(
  {
    UniversityFavs: {
      screen: UniversityFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Üniversiteler",
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="ios-school" size={24} color={"black"} />
        ),
      },
    },
    Filters: {
      screen: FiltersStackNavigator,
      navigationOptions: {
        drawerLabel: "Filtrele",
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/filter-icon-2.png")}
            style={[styles.icon, { tintColor: tintColor }]}
          />
        ),
      },
      contentOptions: {
        labelStyle: {
          color: "red",
        },
      },
    },
    About: {
      screen: AboutStackNavigator,
      navigationOptions: {
        drawerLabel: () => null,
        // drawerLabel: "Hakkında",
        // drawerIcon: ({ tintColor }) => (
        //   <Image
        //     source={require('../assets/about-icon.jpg')}
        //     style={[styles.icon, { tintColor: tintColor }]}
        //   />
        // ),
      },
    },
    CountDown: {
      screen: CountDownStackNavigator,
      navigationOptions: {
        drawerLabel: "Geri Sayım",
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="ios-timer" size={24} color={"black"} />
        ),
      },
    },
  },
  {
    initialRouteName: "UniversityFavs",
    contentComponent: CustomDrawerMenu,
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: "open-sans-bold",
      },
    },
  }
);

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  labelStyle: {
    fontSize: 16,
  },
});

export default createAppContainer(DrawerNavigator);
