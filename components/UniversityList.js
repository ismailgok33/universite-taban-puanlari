import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import * as SQLite from "expo-sqlite";

import UniversityGridTile from "../components/UniversityGridTile";
import { toggleFavorites } from "../store/actions/universities";
import { insertFavorite, fetchFavorite } from "../helpers/db";

const db = SQLite.openDatabase("favorites3.db");

const UniversityList = (props) => {
  const dispatch = useDispatch();

  const toggleFavoriteHandler = (id) => {
    // const dbResult = insertFavorite(id)
    //   .then(() => {
    //     console.log("id: " + id);
    //     console.log("dbResult: " + dbResult);
    //     console.log(dbResult);
    //   })
    //   .catch((err) => {
    //     console.log("err: " + err);
    //   });
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO favorites3 (uniId) VALUES (?);",
        [id],
        (_, result) => {
          console.log("result:");
          console.log(result);
        },
        (_, err) => {
          console.log("err:");
          console.log(err);
        }
      );
    });
    dispatch(toggleFavorites(id));
  };

  const renderGridItem = (itemData) => {
    return (
      <UniversityGridTile
        name={itemData.item.name}
        department={itemData.item.department}
        score={itemData.item.score}
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
