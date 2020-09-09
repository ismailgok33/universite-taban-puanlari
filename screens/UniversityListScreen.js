import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, View, Picker } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import UniversityList from "../components/UniversityList";
// import { UNIVERSITIES } from "../data/university-data";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import { setOrder, search } from "../store/actions/universities";
import FloatingActions from "../components/FloatingActions";
import University from '../models/university'

const UniversityListScreen = (props) => {
  const [orderState, setOrderState] = useState("name");
  const [searchValue, setSearchValue] = useState("");

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

  // avaibleUniversities = [
  //   new University(
  //     "uni_6902",
  //     "GİRESUN ÜNİVERSİTESİ ",
  //     "Acil Durum ve Afet Yönetimi",
  //     "255,13222",
  //     "873601",
  //     "40",
  //     false,
  //     "36",
  //     2,
  //     "TYT"
  //   ),

  //   new University(
  //     "uni_6903",
  //     "GİRESUN ÜNİVERSİTESİ ",
  //     "Alternatif Enerji Kaynakları Teknolojisi",
  //     "180,22457",
  //     "1721936",
  //     "30",
  //     false,
  //     "36",
  //     2,
  //     "TYT"
  //   ),
  // ]

  const searchFilterHandler = text => {
    setSearchValue(text);
    dispatch(search(text));
  }

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
        <UniversityList
          style={styles.universityList}
          data={avaibleUniversities}
          navigation={props.navigation}
          searchFilter={text => searchFilterHandler(text)}
          searchValue={searchValue}
        />
        <DefaultText style={styles.content}>
          Üniversite bulunamadı. Filtreleri kontrol ediniz.
        </DefaultText>
        <FloatingActions
          style={styles.floatingButton}
          press={(name) => orderHandler(name)}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <UniversityList
        style={styles.universityList}
        data={avaibleUniversities}
        navigation={props.navigation}
        searchFilter={text => searchFilterHandler(text)}
        searchValue={searchValue}
      />
      <FloatingActions
        style={styles.floatingButton}
        press={(name) => orderHandler(name)}
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
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  universityList: {
    flex: 1,
  },
  floatingButton: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});

export default UniversityListScreen;
