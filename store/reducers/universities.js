import { UNIVERSITIES } from "../../data/university-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/universities";

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
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const show4Years = appliedFilters.show4Years;
      const show2Years = appliedFilters.show2Years;
      const updatedFilteredUniversities = state.universities.filter((uni) => {
        if (appliedFilters.isState && !uni.isState) {
          return false;
        }
        console.log(
          "show4Years: " +
            appliedFilters.show4Years +
            " show2Years: " +
            appliedFilters.show2Years +
            " uni.universityYear: " +
            uni.universityYear
        );
        if (show4Years && !show2Years) {
          if (uni.universityYear !== 4) {
            console.log("girdi1");
            return false;
          }
        }
        if (!show4Years && show2Years) {
          if (uni.universityYear !== 2) {
            console.log("girdi2");
            return false;
          }
        }
        if (!show4Years && !show2Years) {
          if (uni.universityYear === 2 || uni.universityYear === 4) {
            console.log("girdi3");
            return false;
          }
        }
        //console.log("filteredCities: " + appliedFilters.filteredCities);
        if (!appliedFilters.filteredCities.some((city) => city === uni.city)) {
          console.log("girdi4");
          return false;
        }
        return true;
      });
      return { ...state, filteredUniversities: updatedFilteredUniversities };
    default:
      return state;
  }
};

export default universitiesReducer;
