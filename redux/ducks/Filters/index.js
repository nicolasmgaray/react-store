const defaultState = {
  orderBy: "recent",
  searchTerm: ""
};

const types = {
  FILTERS_UPDATE_ORDER: "FILTERS/UPDATE_ORDER",
  FILTERS_UPDATE_SEARCH_TERM: "FILTERS/UPDATE_SEARCH_TERM"
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.FILTERS_UPDATE_ORDER:
      return {
        ...state,
        orderBy: action.payload
      };
    case types.FILTERS_UPDATE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload
      };

    default:
      return { ...state };
  }
};

export { defaultState, types, reducer };
