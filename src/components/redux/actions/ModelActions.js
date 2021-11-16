import {
  FETCH_SUCCESS_MODELS,
  FETCH_FAILURE_MODELS,
  SET_LOADER,
} from "./actionTypes";
import axios from "axios";
import * as api from "../../../api/api";

/**
 * Fetching list of MODELS
 * @returns dispatch fetch success list of MODELS
 */
export const fetchModelsList = (make) => {
  return async (dispatch, state) => {
    dispatch(setLoader(true));
    try {
      let response = await api.getData(`models?make=${make}`);
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
 * @returns type:FETCH_SUCCESS_MODELS,data
 */
export const fetchSuccess = (data, options = {}) => {
  return { type: FETCH_SUCCESS_MODELS, payload: data };
};

/**
 * fetch failure to return error
 * @param {error} displays error
 * @returns type fetch failure,payload data
 */
export const fetchFailure = (err) => {
  return { type: FETCH_FAILURE_MODELS, payload: err.message };
};

/**
 * set loader action
 * @param {boolean} isLoading -whether to display progress
 * @returns type,payload
 */
export const setLoader = (isLoading) => {
  return { type: SET_LOADER, payload: isLoading };
};
