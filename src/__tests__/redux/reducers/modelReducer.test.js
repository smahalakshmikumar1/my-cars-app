import modelReducer from "../../../components/redux/reducers/modelReducer";
import {
  FETCH_SUCCESS_MODELS,
  FETCH_FAILURE_MODELS,
  SET_LOADER,
} from "../../../../src/components/redux/actions/actionTypes";

describe("modelReducer", () => {
  describe("when modelReducer and action{type:FETCH_SUCCESS_MODELS}", () => {
    describe("AND when state is []", () => {
      it("should return updated state", () => {
        let item1 = { id: 1, time: "1PM-1.30PM" };
        let item2 = { id: 2, time: "1PM-1.30PM" };
        let state = {
          modelsList: [],
          isLoading: false,
          error: "",
        };
        let action = { type: FETCH_SUCCESS_MODELS, payload: [item1, item2] };
        let result = modelReducer(state, action);
        expect(result).toStrictEqual({
          modelsList: [item1, item2],
          isLoading: false,
          error: "",
        });
      });
    });
  });

  describe("when modelReducer and action{type:DEFAULT}", () => {
    describe("AND when state is []", () => {
      it("should return updated state", () => {
        let item = { id: 1, time: "1PM-1.30PM" };
        let state = {
          modelsList: [],
          isLoading: false,
          error: "",
        };
        let action = { type: "DEFAULT_ACTION" };
        let result = modelReducer(state, action);
        expect(result).toStrictEqual(state);
      });
    });
  });

  describe("when modelReducer and action{type:FETCH_FAILURE_MODELS}", () => {
    describe("AND when state is []", () => {
      it("should return updated state", () => {
        let error = "error occurred";
        let state = {
          modelsList: [],
          isLoading: false,
          error: "",
        };
        let action = { type: FETCH_FAILURE_MODELS, payload: error };
        let result = modelReducer(state, action);
        expect(result).toStrictEqual({
          modelsList: [],
          isLoading: false,
          error: error,
        });
      });
    });
  });

  describe("when modelReducer and action{type:SET_LOADER}", () => {
    describe("AND when state is []", () => {
      it("should return updated state", () => {
        let isLoading = true;
        let state = {
          modelsList: [],
          isLoading: false,
          error: "",
        };
        let action = { type: SET_LOADER, payload: isLoading };
        let result = modelReducer(state, action);
        expect(result).toStrictEqual({
          modelsList: [],
          isLoading: isLoading,
          error: "",
        });
      });
    });
  });
});
