import { insertFavorite, fetchFavorite } from "../../helpers/db";

export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const LOAD_FAVORITES = "LOAD_FAVORITES";
export const SET_FILTERS = "SET_FILTERS";
export const SET_ORDER = "SET_ORDER";
export const SEARCH = "SEARCH";

export const toggleFavorites = (id) => {
  return async (dispatch) => {
    try {
      const dbResult = await insertFavorite(id);
      dispatch({ type: TOGGLE_FAVORITE, universityId: id });
    } catch (err) {
      throw err;
    }
  };
};

export const loadFavorites = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchFavorite();
      dispatch({ type: LOAD_FAVORITES, favUniversities: dbResult.rows._array });
    } catch (err) {
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

export const setOrder = (orderSettings) => {
  return {
    type: SET_ORDER,
    order: orderSettings,
  };
};

export const search = (text) => {
  return {
    type: SEARCH,
    searchText: text,
  };
};
