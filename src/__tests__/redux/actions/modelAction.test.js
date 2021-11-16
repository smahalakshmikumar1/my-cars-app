import {
  fetchModelsList,
  fetchSuccess,
  fetchFailure,
  setLoader,
} from "../../../../src/components/redux/actions/ModelActions";
import {
  FETCH_SUCCESS_MODELS,
  FETCH_FAILURE_MODELS,
  SET_LOADER,
} from "../../../../src/components/redux/actions/actionTypes";
import * as api from "../../../api/api";

describe("model actions", () => {
  describe("fetch model", () => {
    describe("AND success fetchModelsList  actions", () => {
      it("should return thunk fetchModelsList  action obj", async () => {
        let response = { data: [{ id: 1 }, { id: 2 }] };
        let getDataSpy = jest
          .spyOn(api, "getData")
          .mockImplementation(() => Promise.resolve(response));

        let dispatch = jest.fn();
        let actionfn = fetchModelsList();
        await actionfn(dispatch);

        expect(getDataSpy).toHaveBeenCalled();
        expect(getDataSpy).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch.mock.calls[0]).toEqual([setLoader(true)]);
        expect(dispatch.mock.calls[1]).toEqual([fetchSuccess(response.data)]);
        expect(dispatch.mock.calls[2]).toEqual([setLoader(false)]);
      });
    });

    describe("AND failure fetchModelsList  actions", () => {
      it("should return thunk fetchModelsList  action obj", async () => {
        let error = { message: "error occured" };
        let getDataSpy = jest
          .spyOn(api, "getData")
          .mockImplementation(() => Promise.reject(error));

        let dispatch = jest.fn();
        let actionfn = fetchModelsList();
        await actionfn(dispatch);

        expect(getDataSpy).toHaveBeenCalled();
        expect(getDataSpy).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch.mock.calls[0]).toEqual([setLoader(true)]);
        expect(dispatch.mock.calls[1]).toEqual([fetchFailure(error)]);
        expect(dispatch.mock.calls[2]).toEqual([setLoader(false)]);
      });
    });
  });

  describe("FETCH_SUCCESS_MODELS", () => {
    it("should return FETCH_SUCCESS_MODELS action obj", () => {
      let dataItem = [{ id: 1 }, { id: 2 }];
      let result = fetchSuccess(dataItem);
      expect(result).toStrictEqual({
        type: FETCH_SUCCESS_MODELS,
        payload: dataItem,
      });
    });
  });

  describe("FETCH_FAILURE_MODELS", () => {
    it("should return FETCH_FAILURE_MODELS action obj", () => {
      let error = { message: "error occured" };
      let result = fetchFailure(error);
      expect(result).toStrictEqual({
        type: FETCH_FAILURE_MODELS,
        payload: error.message,
      });
    });
  });

  describe("setLoader", () => {
    it("should return setLoader action obj", () => {
      let isLoading = true;
      let result = setLoader(isLoading);
      expect(result).toStrictEqual({ type: SET_LOADER, payload: isLoading });
    });
  });
});
