import React from "react";
import { Platform, Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import UniversityListScreen from "../screens/UniversityListScreen";
import UniversityDetailScreen from "../screens/UniversityDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import Colors from "../constants/Colors";
import AboutScreen from "../screens/AboutScreen";
import CitiesFilterScreen from "../screens/CitiesFilterScreen";
import DepartmentFilterScreen from "../screens/DepartmentFilterScreen";
import CountDownScreen from "../screens/CountDownScreen";

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
    UniversityDetail: UniversityDetailScreen,
    // Filter: FiltersScreen,
  },
  screenStackConfig
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    UniversityDetail: UniversityDetailScreen,
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
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
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
      },
    },
    Filters: {
      screen: FiltersStackNavigator,
      navigationOptions: {
        drawerLabel: "Filtrele",
      },
    },
    About: {
      screen: AboutStackNavigator,
      navigationOptions: {
        drawerLabel: "Hakkında",
      },
    },
    CountDown: {
      screen: CountDownStackNavigator,
      navigationOptions: {
        drawerLabel: "Geri Sayım",
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: "open-sans-bold",
      },
    },
  }
);

export default createAppContainer(DrawerNavigator);
