import apiService from "../../../api";

const defaultState = {
  id: null,
  name: "",
  points: 0,
  history: [],
  fetching: false
};

const types = {
  USER_GET_REQUEST: "USER/GET_REQUEST",
  USER_GET_USER_SUCCESS: "USER/GET_USER_SUCCESS",
  USER_GET_HISTORY_SUCCESS: "USER/GET_HISTORY_SUCCESS",
  USER_ADD_POINTS_SUCCESS: "USER/ADD_POINTS_SUCCESS",
  USER_REDEEM_SUCCESS: "USER/REDEEM_SUCCESS",
  USER_GET_FAILURE: "USER/GET_FAILURE"
};

const actions = {
  getUser: () => async dispatch => {
    dispatch({ type: types.USER_GET_REQUEST });
    try {
      const user = await apiService.getUser();
      dispatch({ type: types.USER_GET_USER_SUCCESS, payload: user });
      return user;
    } catch (err) {
      dispatch({ type: types.USER_GET_FAILURE });
      return err;
    }
  },
  redeem: (productId, cost) => async dispatch => {
    dispatch({ type: types.USER_GET_REQUEST });
    try {
      const result = await apiService.redeemProduct(productId);
      if (result.error) throw result.error;
      dispatch({ type: types.USER_REDEEM_SUCCESS, payload: cost });
      return result;
    } catch (err) {
      dispatch({ type: types.USER_GET_FAILURE });
      throw err;
    }
  },
  getHistory: () => async dispatch => {
    dispatch({ type: types.USER_GET_REQUEST });
    try {
      const history = await apiService.getHistory();
      dispatch({ type: types.USER_GET_HISTORY_SUCCESS, payload: history });
      return history;
    } catch (err) {
      dispatch({ type: types.USER_GET_FAILURE });
      return err;
    }
  },
  addPoints: pointsToAdd => async dispatch => {
    dispatch({ type: types.USER_GET_REQUEST });
    try {
      const result = await apiService.addpoints(pointsToAdd);
      dispatch({
        type: types.USER_ADD_POINTS_SUCCESS,
        payload: result["New Points"]
      });
    } catch (error) {
      dispatch({ type: types.USER_GET_FAILURE });
      return err;
    }
  }
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.USER_GET_REQUEST:
      return {
        ...state,
        fetching: true
      };
    case types.USER_GET_USER_SUCCESS: {
      const { _id: id, name, points, redeemHistory: history } = action.payload;
      return {
        ...state,
        fetching: false,
        id,
        name,
        points,
        history
      };
    }
    case types.USER_GET_HISTORY_SUCCESS:
      return {
        ...state,
        fetching: false,
        history: action.payload
      };
    case types.USER_ADD_POINTS_SUCCESS: {
      return {
        ...state,
        points: action.payload
      };
    }

    case types.USER_GET_FAILURE:
      return {
        ...state,
        fetching: false
      };
    case types.USER_REDEEM_SUCCESS: {
      const newPoints = state.points - action.payload;
      return {
        ...state,
        points: newPoints,
        fetching: false
      };
    }

    default:
      return { ...state };
  }
};

export { defaultState, types, actions, reducer };
