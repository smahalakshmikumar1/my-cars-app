import {
  ADD_TO_MYVEHICLES,
  REMOVE_FROM_MYVEHICLES,
  CLEAR_MYVEHICLES,
} from "./actionTypes";

/**
 * adds vehicles to my list of vehicles
 * @returns ADD_TO_MYVEHICLES
 */
export const addToMyVehicles = (vehicleItem) => {
  return {
    type: ADD_TO_MYVEHICLES,
    payload: vehicleItem,
  };
};

/**
 * Removes vehicles from my list of vehicles
 * @returns REMOVE_FROM_MYVEHICLES
 */
export const RemoveFromMyVehicles = (id) => {
  return {
    type: REMOVE_FROM_MYVEHICLES,
    payload: id,
  };
};

/**clears vehicles from my list
 * @returns CLEAR_MYVEHICLES
 */
export const ClearVehicles = () => {
  return {
    type: CLEAR_MYVEHICLES,
  };
};
