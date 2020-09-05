import { insertFavorite, fetchFavorite } from "../../helpers/db";

export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const LOAD_FAVORITES = "LOAD_FAVORITES";
export const SET_FILTERS = "SET_FILTERS";

// export const toggleFavorites = (id) => {
//   return {
//     type: TOGGLE_FAVORITE,
//     universityId: id,
//   };
// };

export const toggleFavorites = (id) => {
  return async (dispatch) => {
    try {
      const dbResult = await insertFavorite(id);
      console.log("insert dbResult:");
      console.log(dbResult);
      dispatch({ type: TOGGLE_FAVORITE, universityId: id });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const loadFavorites = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchFavorite();
      console.log("fetch dbResult:");
      console.log(dbResult);
      dispatch({ type: LOAD_FAVORITES, favUniversities: dbResult.rows._array });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const setFilters = (filterSettings) => {
  return {
    type: SET_FILTERS,
    filters: filterSettings,
  };
};
