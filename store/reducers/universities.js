import { UNIVERSITIES } from "../../data/university-data";
import {
  TOGGLE_FAVORITE,
  SET_FILTERS,
  LOAD_FAVORITES,
  SET_ORDER,
  SEARCH
} from "../actions/universities";
import University from "../../models/university";

const initialState = {
  universities: UNIVERSITIES,
  filteredUniversities: UNIVERSITIES,
  favoriteUniversities: [],
};

const universitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteUniversities.findIndex(
        (university) => university.id === action.universityId
      );

      if (existingIndex >= 0) {
        const updatedFavUniversities = [...state.favoriteUniversities];
        updatedFavUniversities.splice(existingIndex, 1);
        return { ...state, favoriteUniversities: updatedFavUniversities };
      } else {
        const university = state.universities.find(
          (uni) => uni.id === action.universityId
        );
        return {
          ...state,
          favoriteUniversities: state.favoriteUniversities.concat(university),
        };
      }
    case LOAD_FAVORITES:
      const loadedUniversities = action.favUniversities;
      const uploadedFavories = loadedUniversities.map((uni) => {
        let university = UNIVERSITIES.find((u) => u.id === uni.uniId);
        return new University(
          university.id,
          university.name,
          university.department,
          university.score,
          university.placement,
          university.quota,
          university.isState,
          university.city,
          university.universityYear,
          university.scoreType
        );
      });
      return { ...state, favoriteUniversities: uploadedFavories };
    case SET_FILTERS:
      const appliedFilters = action.filters;
      // console.log("appliedFilters.filteredCities:");
      // console.log(appliedFilters.filteredCities);
      // console.log("appliedFilters.filteredDepartments:");
      // console.log(appliedFilters.filteredDepartments);
      const show4Years = appliedFilters.show4Years;
      const show2Years = appliedFilters.show2Years;
      const updatedFilteredUniversities = state.universities.filter((uni) => {
        if (appliedFilters.isState && !uni.isState) {
          return false;
        }
        if (show4Years && !show2Years) {
          if (uni.universityYear !== 4) {
            return false;
          }
        }
        if (!show4Years && show2Years) {
          if (uni.universityYear !== 2) {
            return false;
          }
        }
        if (!show4Years && !show2Years) {
          if (uni.universityYear === 2 || uni.universityYear === 4) {
            return false;
          }
        }
        if (!appliedFilters.filteredCities.some((city) => city === uni.city)) {
          return false;
        }
        if (
          !appliedFilters.filteredDepartments.some((department) =>
            uni.department.includes(department)
          )
        ) {
          return false;
        }
        return true;
      });
      return { ...state, filteredUniversities: updatedFilteredUniversities };
    case SEARCH:
      const searchedUniversities = state.filteredUniversities.filter(item => {
        const itemData = `${item.name.toUpperCase()} ${item.department.toUpperCase()}`;
        const textData = action.searchText.toUpperCase();
        // console.log(itemData.indexOf(textData) > -1);
        return itemData.indexOf(textData) > -1;
      });
      return { ...state, filteredUniversities: searchedUniversities };
    case SET_ORDER:
      // console.log("set_order girdi action.order:");
      // console.log(action.order);
      if (action.order === "score") {
        // console.log("score'a girdi.");
        const updatedFilteredUniversities = state.filteredUniversities.sort(
          (a, b) => {
            return a.score < b.score ? 1 : b.score < a.score ? -1 : 0;
          }
        );
        // console.log("updatedFilteredUniversities:");
        // console.log(updatedFilteredUniversities);
        return {
          ...state,
          filteredUniversities: updatedFilteredUniversities,
        };
      } else {
        // order by name
        // console.log("name'e girdi.");
        const updatedFilteredUniversities2 = state.filteredUniversities.sort(
          (a, b) => {
            return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
          }
        );
        // console.log("updatedFilteredUniversities2:");
        // console.log(updatedFilteredUniversities2);
        return {
          ...state,
          filteredUniversities: updatedFilteredUniversities2,
        };
      }
    default:
      return state;
  }
};

export default universitiesReducer;
