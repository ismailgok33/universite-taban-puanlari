import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { UNIVERSITIES } from "../data/university-data";

const UniversityDetailScreen = (props) => {
  const universityId = props.navigation.getParam("universityId");

  const selectedUniversity = UNIVERSITIES.find(
    (university) => university.id === universityId
  );

  return (
    <View style={styles.screen}>
      <Text>This is University Detail Screen!!</Text>
      <Text>{selectedUniversity.name}</Text>
    </View>
  );
};

UniversityDetailScreen.navigationOptions = ({ navigation }) => {
  const universityId = navigation.getParam("universityId");

  const selectedUniversity = UNIVERSITIES.find(
    (university) => university.id === universityId
  );

  return {
    title: selectedUniversity.name,
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
