import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob";
import Constants from "expo-constants";

import UniversityGridTile from "../components/UniversityGridTile";
import { toggleFavorites, loadFavorites } from "../store/actions/universities";
import { CITIES } from "../data/city-data";

const UniversityList = (props) => {
  const dispatch = useDispatch();

  const [flatListRef, setFlatListRef] = useState();
  const [scrollOffset, setScrollOffset] = useState();

  useEffect(() => {
    dispatch(loadFavorites());
  }, [dispatch]);

  const testID = "ca-app-pub-3940256099942544/1033173712";
  const productionID = "ca-app-pub-6180320592686930/3823364201";

  const adUnitID = Constants.isDevice && !__DEV__ ? productionID : testID;

  const toggleFavoriteHandler = async (id) => {
    try {
      await AdMobInterstitial.setAdUnitID(adUnitID); // Test ID, Replace with your-admob-unit-id
      await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
      await AdMobInterstitial.showAdAsync();
    } catch (e) {
      console.log("showInterstitialBanner hatası");
    }
    await dispatch(toggleFavorites(id));
  };

  const mapCityIdToName = (id) => {
    return CITIES.find((city) => city.id === id).name;
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
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.data}
        renderItem={renderGridItem}
        keyExtractor={(item) => item.id}
        ref={(ref) => setFlatListRef(ref)}
        scrollToTop={props.scrollToTop(flatListRef)}
        onScroll={(e) => {
          setScrollOffset(e.nativeEvent.contentOffset.y);
        }}
        scrollEventThrottle={150}
        scrollOffset={props.getScrollOffset(scrollOffset)}
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
