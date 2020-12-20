import { UNIVERSITIES } from "../../data/university-data";
import {
  TOGGLE_FAVORITE,
  SET_FILTERS,
  LOAD_FAVORITES,
  SET_ORDER,
  SEARCH,
} from "../actions/universities";
import University from "../../models/university";

const initialState = {
  universities: UNIVERSITIES,
  filteredUniversities: UNIVERSITIES,
  filteredUniversitiesNoSearch: UNIVERSITIES,
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
      const no4Years = appliedFilters.no4Years;
      const no2Years = appliedFilters.no2Years;
      const updatedFilteredUniversities = state.universities.filter((uni) => {
        if (appliedFilters.noState && uni.isState) {
          return false;
        }
        if (appliedFilters.noPrivate && !uni.isState) {
          return false;
        }
        if (
          appliedFilters.noFullScholarship &&
          uni.department.includes("Burslu")
        ) {
          return false;
        }
        if (appliedFilters.no75Scholarship && uni.department.includes("%75")) {
          return false;
        }
        if (appliedFilters.no50Scholarship && uni.department.includes("%50")) {
          return false;
        }
        if (appliedFilters.no25Scholarship && uni.department.includes("%25")) {
          return false;
        }
        if (
          appliedFilters.noFullyPaid &&
          !uni.isState &&
          !uni.department.includes("İndirimli")
        ) {
          return false;
        }
        if (no4Years && !no2Years) {
          if (uni.universityYear !== 2) {
            return false;
          }
        }
        if (!no4Years && no2Years) {
          if (uni.universityYear !== 4) {
            return false;
          }
        }
        if (no4Years && no2Years) {
          if (uni.universityYear === 2 || uni.universityYear === 4) {
            return false;
          }
        }
        if (appliedFilters.noEnglish && appliedFilters.noTurkish) {
          return false;
        }
        if (appliedFilters.noEnglish && uni.department.includes("İngilizce")) {
          return false;
        }
        if (appliedFilters.noTurkish && !uni.department.includes("İngilizce")) {
          return false;
        }
        if (appliedFilters.filteredCities) {
          if (
            !appliedFilters.filteredCities.some((city) => city === uni.city)
          ) {
            return false;
          }
        }
        if (appliedFilters.filteredDepartments) {
          if (
            !appliedFilters.filteredDepartments.some((department) =>
              uni.department.includes(department)
            )
          ) {
            return false;
          }
        }

        return true;
      });
      return {
        ...state,
        filteredUniversities: updatedFilteredUniversities,
        filteredUniversitiesNoSearch: updatedFilteredUniversities,
      };
    case SEARCH:
      const searchedUniversities = state.filteredUniversitiesNoSearch.filter(
        (item) => {
          const itemData = `${item.name.toLocaleUpperCase()} ${item.department.toLocaleUpperCase()}`;
          const textData = action.searchText.toLocaleUpperCase();
          const textDataList = textData.split(" ");
          if (
            textData == undefined ||
            textData == "" ||
            textData.replace(/ /g, "") == ""
          ) {
            return {
              ...state,
              filteredUniversities: state.filteredUniversitiesNoSearch,
            };
          }
          return textDataList.every((token) => itemData.indexOf(token) > -1);
        }
      );
      return { ...state, filteredUniversities: searchedUniversities };
    case SET_ORDER:
      if (action.order === "score") {
        const updatedFilteredUniversities = state.filteredUniversities.sort(
          (a, b) => {
            return a.score < b.score ? 1 : b.score < a.score ? -1 : 0;
          }
        );
        return {
          ...state,
          filteredUniversities: updatedFilteredUniversities,
        };
      } else {
        // order by name
        const updatedFilteredUniversities2 = state.filteredUniversities.sort(
          (a, b) => {
            return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
          }
        );
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
