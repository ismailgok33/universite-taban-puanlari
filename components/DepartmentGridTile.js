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
import Colors from '../constants/Colors'

const DepartmentGridTile = (props) => {
  const [checked, setChecked] = useState(props.isChecked(props.name));

  return (
    <TouchableOpacity style={styles.container} onPress={() => {
      setChecked(!checked);
      props.handleCheckFilters(props.name, !checked);
    }}>
      <DefaultText style={[styles.text, checked ? styles.selectedText : styles.unselectedText]}> {props.name} </DefaultText>
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked);
          props.handleCheckFilters(props.name, !checked);
        }}
      />
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    borderColor: 'gray',
    borderWidth: 0.5,
    alignItems: 'center'
  },
  text: {
    fontFamily: "open-sans",
    fontSize: 20,
    marginLeft: 10,
  },
  unselectedText: {
    color: 'black'
  },
  selectedText: {
    color: Colors.yellowColor
  }
});

export default DepartmentGridTile;
