import {
  FETCH_SUCCESS_MAKES,
  FETCH_FAILURE_MAKES,
  SET_LOADER,
} from "../actions/actionTypes";

const initialState = { makesList: [], isLoading: false, error: "" };
/**
 * makesReducer to perform fetch success,failure and set loader actions
 * @param {array} state - displays state
 * @param {object} action -action object that has type and payload
 * @returns updated state
 */
const makesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS_MAKES:
      return { ...state, makesList: action.payload, error: "" };
    case FETCH_FAILURE_MAKES:
      return { ...state, error: action.payload, makesList: [] };
    case SET_LOADER:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default makesReducer;
