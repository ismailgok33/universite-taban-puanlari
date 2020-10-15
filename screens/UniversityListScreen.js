import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, View, Platform, Dimensions, Button, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import { SearchBar } from "react-native-elements";
import Constants from 'expo-constants';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';

import UniversityList from "../components/UniversityList";
// import { UNIVERSITIES } from "../data/university-data";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import { setOrder, search } from "../store/actions/universities";
import FloatingActions from "../components/FloatingActions";
import ScrollToTopButton from "../components/ScrollToTopButton";


const UniversityListScreen = (props) => {
  const [orderState, setOrderState] = useState("name");
  const [searchValue, setSearchValue] = useState("");
  const [flatListRef, setFlatListRef] = useState();
  const [scrollOffset, setScrollOffset] = useState();

  const dispatch = useDispatch();

  const showInterstitialBanner = async () => {
    try {
      await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); // Test ID, Replace with your-admob-unit-id
      await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
      await AdMobInterstitial.showAdAsync();
    }
    catch (e) {
      console.log("showInterstitialBanner hatası");
    }

  }

  const orderFilter = useCallback(() => {

    dispatch(setOrder(orderState));
  }, [orderState, dispatch]);

  // useEffect(() => {
  //   orderFilter();
  // }, [orderFilter]);

  orderFilter();

  const testID = 'ca-app-pub-3940256099942544/6300978111';
  const productionID = 'my-id';

  const adUnitID = Constants.isDevice && !__DEV__ ? productionId : testID;

  let avaibleUniversities = useSelector(
    (state) => state.universitiesReducer.filteredUniversities
  );

  useEffect(() => {
    props.navigation.setParams({ orderInfo: "Alfabetik Sıralı" });
  }, []);



  const searchFilterHandler = (text) => {
    setSearchValue(text);
    dispatch(search(text));
  };

  const orderHandler = (name) => {
    if (name === "bt_score") {
      setOrderState("score");
      props.navigation.setParams({ orderInfo: "Puana Göre Sıralı" });
    } else {
      setOrderState("name");
      props.navigation.setParams({ orderInfo: "Alfabetik Sıralı" });
    }
  };

  if (avaibleUniversities.length === 0) {
    return (
      <View style={styles.container}>
        <SearchBar
          style={styles.searchBar}
          placeholder="Anahtar kelime ara..."
          onChangeText={(text) => searchFilterHandler(text)}
          value={searchValue}
          platform={Platform.OS}
        />
        <View style={styles.bottomContainer}>
          <Image
            source={require("../assets/no-university.png")}
            style={styles.noUniversityImage}
          />
        </View>
        <AdMobBanner
          bannerSize="smartBannerPortrait"
          adUnitID={adUnitID} // Test ID, Replace with your-admob-unit-id
          servePersonalizedAds={true}
          // style={{ alignSelf: "center" }}
          onDidFailToReceiveAdWithError={console.log("Boş Üniversite listesinde reklam gösterirken hatayla karşılaşıldı.")}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SearchBar
        style={styles.searchBar}
        placeholder="Anahtar kelime ara..."
        onChangeText={(text) => searchFilterHandler(text)}
        value={searchValue}
        platform={Platform.OS}
      />
      <Button onPress={showInterstitialBanner} style={{ flex: 1 }} title="InterstitialAd" />
      <UniversityList
        style={styles.universityList}
        data={avaibleUniversities}
        navigation={props.navigation}
        searchFilter={(text) => searchFilterHandler(text)}
        searchValue={searchValue}
        scrollToTop={(ref) => setFlatListRef(ref)}
        getScrollOffset={(offset) => setScrollOffset(offset)}
      />
      <FloatingActions
        style={styles.floatingButton}
        press={(name) => orderHandler(name)}
      />
      <ScrollToTopButton
        position="left"
        showBackground={false}
        onPressMain={() =>
          flatListRef.scrollToIndex({ animated: true, index: 0 })
        }
        visible={
          scrollOffset > Dimensions.get("window").height / 20 ? true : false
        }
      />

      <AdMobBanner
        bannerSize="smartBannerPortrait"
        adUnitID={adUnitID} // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds={true}
        // style={{ alignSelf: "center" }}
        onDidFailToReceiveAdWithError={console.log("Dolu Üniversite listesinde reklam gösterirken hatayla karşılaşıldı.")}
      />
    </View>
  );
};

UniversityListScreen.navigationOptions = (navData) => {
  return {
    title: `Üniversite Listesi (${navData.navigation.getParam("orderInfo")})`,
    headerTitleStyle: {
      fontFamily: "open-sans",
      fontWeight: "bold",
    },
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
    // headerRight: (
    //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //     <Item
    //       title="Filtre"
    //       iconName="ios-menu"
    //       // iconName="filter"
    //       onPress={() => {
    //         navData.navigation.navigate("Filter");
    //       }}
    //     />
    //   </HeaderButtons>
    // ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  universityList: {
    flex: 1,
  },
  noUniversity: {
    width: "100%",
    height: "20%",
  },
  noUniversityImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    height: 400,
    resizeMode: 'contain'
  },
  floatingButton: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  searchBar: {
    width: "100%",
    height: "20%",
  },
});

export default UniversityListScreen;
