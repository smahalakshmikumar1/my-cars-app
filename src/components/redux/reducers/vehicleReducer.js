import {
  FETCH_SUCCESS_VEHICLES,
  FETCH_FAILURE_VEHICLES,
  SET_LOADER,
} from "../actions/actionTypes";

const initialState = { vehiclesList: [], isLoading: false, error: "" };
/**
 * vehicleReducer to perform fetch success,failure and set loader actions
 * @param {array} state - displays state
 * @param {object} action -action object that has type and payload
 * @returns updated state
 */
const vehicleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS_VEHICLES:
      return { ...state, vehiclesList: action.payload, error: "" };
    case FETCH_FAILURE_VEHICLES:
      return { ...state, error: action.payload, vehiclesList: [] };
    case SET_LOADER:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default vehicleReducer;
