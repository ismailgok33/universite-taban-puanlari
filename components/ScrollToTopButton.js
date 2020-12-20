import React from "react";
import { View, StyleSheet } from "react-native";
import { FloatingAction } from "react-native-floating-action";

import Colors from "../constants/Colors";

const ScrollToTopButton = (props) => {
  return (
    <FloatingAction
      style={styles.floatingButton}
      color={Colors.primaryColor}
      floatingIcon={require("../assets/scroll-to-top-arrow.png")}
      iconWidth={30}
      iconHeight={30}
      distanceToEdge={{ vertical: 50, horizontal: 30 }}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});

export default ScrollToTopButton;
