import React, { useEffect } from "react";
import { StyleSheet, View, Share } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import * as StoreReview from 'expo-store-review';

// import { UNIVERSITIES } from "../data/university-data";
import UniversityList from "../components/UniversityList";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import { loadFavorites } from "../store/actions/universities";

const FavoritesScreen = (props) => {
  const avaibleUniversities = useSelector(
    (state) => state.universitiesReducer.favoriteUniversities
  );

  const dispatch = useDispatch();
  StoreReview.requestReview(); // store review'i detaylı incele

  const listFavoriteUniversities = () => {
    return avaibleUniversities.map(uni => { return "-" + uni.name + " / " + uni.department + "\n" }).toString().replace(',', '')
  }

  // Share function
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: listFavoriteUniversities(),
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    dispatch(loadFavorites());
    props.navigation.setParams({ onShareParam: onShare })
  }, [dispatch]);



  if (avaibleUniversities.length === 0 || !avaibleUniversities) {
    return (
      <View style={styles.content}>
        <DefaultText>Favori üniversite bulunamadı.</DefaultText>
      </View>
    );
  }

  return (
    <UniversityList data={avaibleUniversities} navigation={props.navigation} />
  );
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    title: "Favoriler",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menü"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Paylaş"
          iconName="ios-share"
          onPress={navData.navigation.getParam('onShareParam')}
        />
      </HeaderButtons>
    ),
  };

};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
