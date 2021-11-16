import {
  FETCH_SUCCESS_MODELS,
  FETCH_FAILURE_MODELS,
  SET_LOADER,
} from "../actions/actionTypes";

const initialState = { modelsList: [], isLoading: false, error: "" };
/**
 * modelReducer to perform fetch success,failure and set loader actions
 * @param {array} state - displays state
 * @param {object} action -action object that has type and payload
 * @returns updated state
 */
const modelReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS_MODELS:
      return { ...state, modelsList: action.payload, error: "" };
    case FETCH_FAILURE_MODELS:
      return { ...state, error: action.payload, modelsList: [] };
    case SET_LOADER:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default modelReducer;
