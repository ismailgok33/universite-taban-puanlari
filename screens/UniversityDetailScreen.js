import React, { useEffect } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { useSelector } from "react-redux";

import Colors from "../constants/Colors";

// import { UNIVERSITIES } from "../data/university-data";

const UniversityDetailScreen = (props) => {
  const universityId = props.navigation.getParam("universityId");

  const avaibleUniversities = useSelector(
    (state) => state.universitiesReducer.universities
  );

  const selectedUniversity = avaibleUniversities.find(
    (university) => university.id === universityId
  );

  // useEffect(() => {
  //   props.navigation.setParams({ universityName: selectedUniversity.name });
  // }, [selectedUniversity]);

  return (
    <View style={styles.screen}>
      <Text>This is University Detail Screen!!</Text>
      <Text>{selectedUniversity.name}</Text>
    </View>
  );
};

UniversityDetailScreen.navigationOptions = ({ navigation }) => {
  const universityId = navigation.getParam("universityId");
  const universityName = navigation.getParam("universityName");

  // const selectedUniversity = UNIVERSITIES.find(
  //   (university) => university.id === universityId
  // );

  return {
    title: universityName,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UniversityDetailScreen;
