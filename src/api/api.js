import axios from "axios";

const baseUrl = "http://localhost:8080/api/";

/**
 * //to fetch list of data
 * @param {*} url
 * @param {*} options
 * @returns
 */

export const getData = (url, options = {}) => {
  return axios.get(`${baseUrl}${url}`, options);
};

/**
//to post object
 * @param {*} url
 * @param {*} options
 * @returns
 */
export const postData = (url, postData, options = {}) => {
  return axios.post(`${baseUrl}${url}`, postData, options);
};

/**
//to put object
 * @param {*} url
 * @param {*} options
 * @returns
 */
export const putData = (url, putData, options = {}) => {
  return axios.put(`${baseUrl}${url}`, putData, options);
};
