import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FloatingAction } from "react-native-floating-action";

const FloatingButton = (props) => {
  const actions = [
    {
      text: "Alfabetik",
      icon: require("../assets/favicon.png"),
      name: "bt_name",
      position: 1,
    },
    {
      text: "Puana Göre",
      icon: require("../assets/favicon.png"),
      name: "bt_score",
      position: 2,
    },
  ];

  return (
    <FloatingAction
      style={styles.floatingButton}
      {...props}
      actions={actions}
      onPressItem={(name) => props.press(name)}
    />
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});

export default FloatingButton;
