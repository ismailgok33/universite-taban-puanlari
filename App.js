import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { enableScreens } from "react-native-screens";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import UniversityNavigator from "./navigation/UniversityNavigator";
import universitiesReducer from "./store/reducers/universities";
import { init } from "./helpers/db";

enableScreens();

const dbResult = init()
  .then(() => {
    console.log("initialized database");
    console.log(dbResult);
  })
  .catch((err) => {
    console.log("initializing database failed");
    console.log(err);
  });

const rootReducer = combineReducers({
  universitiesReducer: universitiesReducer,
});

const store = createStore(rootReducer);

const fetchFonst = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonst}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }

  return (
    <Provider store={store}>
      <UniversityNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
