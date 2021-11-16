import vehicleReducer from "../../../components/redux/reducers/vehicleReducer";
import {
  FETCH_SUCCESS_VEHICLES,
  FETCH_FAILURE_VEHICLES,
  SET_LOADER,
} from "../../../../src/components/redux/actions/actionTypes";

describe("vehicleReducer", () => {
  describe("when vehicleReducer and action{type:FETCH_SUCCESS_VEHICLES}", () => {
    describe("AND when state is []", () => {
      it("should return updated state", () => {
        let item1 = { id: 1, time: "1PM-1.30PM" };
        let item2 = { id: 2, time: "1PM-1.30PM" };
        const state = { vehiclesList: [], isLoading: false, error: "" };

        let action = { type: FETCH_SUCCESS_VEHICLES, payload: [item1, item2] };
        let result = vehicleReducer(state, action);
        expect(result).toStrictEqual({
          vehiclesList: [item1, item2],
          isLoading: false,
          error: "",
        });
      });
    });
  });

  describe("when vehicleReducer and action{type:DEFAULT}", () => {
    describe("AND when state is []", () => {
      it("should return updated state", () => {
        const state = { vehiclesList: [], isLoading: false, error: "" };

        let action = { type: "DEFAULT_ACTION" };
        let result = vehicleReducer(state, action);
        expect(result).toStrictEqual(state);
      });
    });
  });

  describe("when vehicleReducer and action{type:FETCH_FAILURE_VEHICLES}", () => {
    describe("AND when state is []", () => {
      it("should return updated state", () => {
        let error = "error occurred";
        const state = { vehiclesList: [], isLoading: false, error: "" };

        let action = { type: FETCH_FAILURE_VEHICLES, payload: error };
        let result = vehicleReducer(state, action);
        expect(result).toStrictEqual({
          vehiclesList: [],
          isLoading: false,
          error: error,
        });
      });
    });
  });

  describe("when vehicleReducer and action{type:SET_LOADER}", () => {
    describe("AND when state is []", () => {
      it("should return updated state", () => {
        let isLoading = true;
        const state = { vehiclesList: [], isLoading: false, error: "" };

        let action = { type: SET_LOADER, payload: isLoading };
        let result = vehicleReducer(state, action);
        expect(result).toStrictEqual({
          vehiclesList: [],
          isLoading: isLoading,
          error: "",
        });
      });
    });
  });
});
