import React from "react";
import { StyleSheet } from "react-native";
import { FloatingAction } from "react-native-floating-action";

import Colors from '../constants/Colors';

const FloatingButton = (props) => {
  const actions = [
    {
      text: "Alfabetik",
      icon: require("../assets/a-z.png"),
      name: "bt_name",
      position: 1,
      color: Colors.primaryColor
    },
    {
      text: "Puana Göre",
      icon: require("../assets/score-desc.jpg"),
      name: "bt_score",
      position: 2,
      color: Colors.primaryColor
    },
  ];

  return (
    <FloatingAction
      style={styles.floatingButton}
      color={Colors.primaryColor}
      floatingIcon={require('../assets/sort-icon-1.png')}
      iconWidth={30}
      iconHeight={30}
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
  },
});

export default FloatingButton;
