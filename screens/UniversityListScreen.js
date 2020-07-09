import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";

import { UNIVERSITIES } from "../data/university-data";
import UniversityGridTile from '../components/UniversityGridTile';

import Colors from "../constants/Colors";

const UniversityListScreen = props => {
  const renderGridItem = itemData => {
    return (
      <UniversityGridTile
        name={itemData.item.name}
        department={itemData.item.department}
        score={itemData.item.score}
        placement={itemData.item.placement}
        onSelect={() => {
          props.navigation.navigate("UniversityDetail", {
            universityId: itemData.item.id,
          });
        }} />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList data={UNIVERSITIES} renderItem={renderGridItem} />
    </View>
  );
};

UniversityListScreen.navigationOptions = {
  title: "Üniversite Listesi",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default UniversityListScreen;
