import makesReducer from "../../../components/redux/reducers/makesReducer";
import {
  FETCH_SUCCESS_MAKES,
  FETCH_FAILURE_MAKES,
  SET_LOADER,
} from "../../../../src/components/redux/actions/actionTypes";

describe("makesReducerr", () => {
  describe("when makesReducerr and action{type:FETCH_SUCCESS_MAKES}", () => {
    describe("AND when state is []", () => {
      it("should return updated state", () => {
        let item1 = { id: 1, time: "1PM-1.30PM" };
        let item2 = { id: 2, time: "1PM-1.30PM" };
        let state = {
          makesList: [],
          isLoading: false,
          error: "",
        };
        let action = { type: FETCH_SUCCESS_MAKES, payload: [item1, item2] };
        let result = makesReducer(state, action);
        expect(result).toStrictEqual({
          makesList: [item1, item2],
          isLoading: false,
          error: "",
        });
      });
    });
  });

  describe("when makesReducer and action{type:DEFAULT}", () => {
    describe("AND when state is []", () => {
      it("should return updated state", () => {
        let item = { id: 1, time: "1PM-1.30PM" };
        let state = {
          makesList: [],
          isLoading: false,
          error: "",
        };
        let action = { type: "DEFAULT_ACTION" };
        let result = makesReducer(state, action);
        expect(result).toStrictEqual(state);
      });
    });
  });

  describe("when makesReducer and action{type:FETCH_FAILURE_MAKES}", () => {
    describe("AND when state is []", () => {
      it("should return updated state", () => {
        let error = "error occurred";
        let state = {
          makesList: [],
          isLoading: false,
          error: "",
        };
        let action = { type: FETCH_FAILURE_MAKES, payload: error };
        let result = makesReducer(state, action);
        expect(result).toStrictEqual({
          makesList: [],
          isLoading: false,
          error: error,
        });
      });
    });
  });

  describe("when makesReducer and action{type:SET_LOADER}", () => {
    describe("AND when state is []", () => {
      it("should return updated state", () => {
        let isLoading = true;
        let state = {
          makesList: [],
          isLoading: false,
          error: "",
        };
        let action = { type: SET_LOADER, payload: isLoading };
        let result = makesReducer(state, action);
        expect(result).toStrictEqual({
          makesList: [],
          isLoading: isLoading,
          error: "",
        });
      });
    });
  });
});
