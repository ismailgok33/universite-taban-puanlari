import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UniversityDetailScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>This is University Detail Screen!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UniversityDetailScreen;
