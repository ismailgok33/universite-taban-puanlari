import React, { useEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import * as SQLite from "expo-sqlite";
import { SearchBar } from 'react-native-elements'

import UniversityGridTile from "../components/UniversityGridTile";
import { toggleFavorites, loadFavorites } from "../store/actions/universities";
import { insertFavorite, fetchFavorite } from "../helpers/db";

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

  const renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => props.searchFilter(text)}
        autoCorrect={false}
        value={props.searchValue}
      />
    );
  }

  const renderGridItem = (itemData) => {
    return (
      <UniversityGridTile
        name={itemData.item.name}
        department={itemData.item.department}
        score={itemData.item.score}
        upperScore={itemData.item.upperScore}
        placement={itemData.item.placement}
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
      <FlatList data={props.data} renderItem={renderGridItem} ListHeaderComponent={renderHeader} keyExtractor={item => item.id} />
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
