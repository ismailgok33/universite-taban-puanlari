import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import UniversityGridTile from "../components/UniversityGridTile";

const UniversityList = (props) => {
  const renderGridItem = (itemData) => {
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
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList data={props.data} renderItem={renderGridItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UniversityList;
