import React, { useEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import UniversityGridTile from "../components/UniversityGridTile";
import { toggleFavorites, loadFavorites } from "../store/actions/universities";
import { CITIES } from '../data/city-data';

// const db = SQLite.openDatabase("favorites4.db");

const UniversityList = (props) => {
  const dispatch = useDispatch();

  // dispatch(loadFavorites());
  useEffect(() => {
    dispatch(loadFavorites());
  }, [dispatch]);

  const toggleFavoriteHandler = (id) => {
    dispatch(toggleFavorites(id));
  };

  const mapCityIdToName = id => {
    return CITIES.find(city => city.id === id).name;
  };

  const renderGridItem = (itemData) => {
    return (
      <UniversityGridTile
        name={itemData.item.name}
        department={itemData.item.department}
        city={mapCityIdToName(itemData.item.city)}
        score={itemData.item.score}
        upperScore={itemData.item.upperScore}
        placement={itemData.item.placement}
        scoreType={itemData.item.scoreType}
        quota={itemData.item.quota}
        press={() => {
          toggleFavoriteHandler(itemData.item.id);
        }}
        uniId={itemData.item.id}
        onSelect={() => {
          props.navigation.navigate("UniversityDetail", {
            universityId: itemData.item.id,
            universityName: itemData.item.name,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.data}
        renderItem={renderGridItem}
        keyExtractor={(item) => item.id}
        ref={(ref) => props.ref(ref)}
      />
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
