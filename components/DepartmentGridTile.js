import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { Checkbox } from "react-native-paper";

import DefaultText from "./DefaultText";

const DepartmentGridTile = (props) => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <DefaultText style={styles.text}> {props.name} </DefaultText>
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked);
          props.handleCheckFilters(props.name, !checked);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontFamily: "open-sans",
    fontSize: 16,
  },
});

export default DepartmentGridTile;
