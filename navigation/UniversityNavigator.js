import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import UniversityListScreen from "../screens/UniversityListScreen";
import UniversityDetailScreen from "../screens/UniversityDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import Colors from "../constants/Colors";

const screenStackConfig = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  },
};

const UniversityNavigator = createStackNavigator(
  {
    UniversityList: UniversityListScreen,
    UniversityDetail: UniversityDetailScreen,
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
          activeTintColor: Colors.accentColor,
          //   inactiveTintColor: "",
        },
      });

export default createAppContainer(UniversityFavTabNavigator);
