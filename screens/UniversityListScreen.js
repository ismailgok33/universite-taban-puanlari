import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, View, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import { searchBar, SearchBar } from "react-native-elements";

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
  const [flatlistRef, setFlatlistRef] = useState();

  const dispatch = useDispatch();

  const orderFilter = useCallback(() => {
    // const appliedOrder = {
    //   order: orderState,
    // };

    dispatch(setOrder(orderState));
  }, [orderState, dispatch]);

  // useEffect(() => {
  //   orderFilter();
  // }, [orderFilter]);

  orderFilter();

  let avaibleUniversities = useSelector(
    (state) => state.universitiesReducer.filteredUniversities
  );

  // console.log("avaibleUniversities:");
  // console.log(avaibleUniversities);

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
          <DefaultText style={styles.content}>
            Üniversite bulunamadı. Filtreleri kontrol ediniz.
          </DefaultText>
          <FloatingActions
            style={styles.floatingButton}
            press={(name) => orderHandler(name)}
          />
        </View>
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
      <UniversityList
        style={styles.universityList}
        data={avaibleUniversities}
        navigation={props.navigation}
        searchFilter={(text) => searchFilterHandler(text)}
        searchValue={searchValue}
        ref={(ref) => setFlatlistRef(ref)}
      />
      <FloatingActions
        style={styles.floatingButton}
        press={(name) => orderHandler(name)}
      />
      <ScrollToTopButton
        position='left'
        showBackground={false}
        onPressMain={() => flatlistRef.scrollToIndex({ animated: true, index: 0 })}
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
