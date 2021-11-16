import {
  FETCH_SUCCESS_VEHICLES,
  FETCH_FAILURE_VEHICLES,
  SET_LOADER,
} from "./actionTypes";
import axios from "axios";
import * as api from "../../../api/api";

/**
 * Fetching list of vehicles for specific make and model
 * @returns dispatch fetch success list of vehicles for specific make and model
 */
export const fetchVehicleList = (make, model) => {
  return async (dispatch, state) => {
    dispatch(setLoader(true));
    try {
      let response = await api.getData(`vehicles?make=${make}&model=${model}`);
      dispatch(fetchSuccess(response.data));
      dispatch(setLoader(false));
    } catch (err) {
      dispatch(fetchFailure(err));
      dispatch(setLoader(false));
    }
  };
};

/* success response
 * @param {array} data -takes response data
 * @param {object} options -shows options
 * @returns type:FETCH_SUCCESS_VEHICLES,data
 */
export const fetchSuccess = (data, options = {}) => {
  return { type: FETCH_SUCCESS_VEHICLES, payload: data };
};

/**
 * fetch failure to return error
 * @param {error} displays error
 * @returns type fetch failure,payload data
 */
export const fetchFailure = (err) => {
  return { type: FETCH_FAILURE_VEHICLES, payload: err.message };
};

/**
 * set loader action
 * @param {boolean} isLoading -whether to display progress
 * @returns type,payload
 */
export const setLoader = (isLoading) => {
  return { type: SET_LOADER, payload: isLoading };
};
