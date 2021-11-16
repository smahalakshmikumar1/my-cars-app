import {
  fetchMakesList,
  fetchSuccess,
  fetchFailure,
  setLoader,
} from "../../../../src/components/redux/actions/makesAction";
import {
  FETCH_SUCCESS_MAKES,
  FETCH_FAILURE_MAKES,
  SET_LOADER,
} from "../../../../src/components/redux/actions/actionTypes";
import * as api from "../../../api/api";

describe("makes actions", () => {
  describe("fetch makes", () => {
    describe("AND success fetchMakesList  actions", () => {
      it("should return thunk fetchMakesList  action obj", async () => {
        let response = { data: [{ id: 1 }, { id: 2 }] };
        let getDataSpy = jest
          .spyOn(api, "getData")
          .mockImplementation(() => Promise.resolve(response));

        let dispatch = jest.fn();
        let actionfn = fetchMakesList();
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

    describe("AND failure fetchMakesList  actions", () => {
      it("should return thunk fetchMakesList  action obj", async () => {
        let error = { message: "error occured" };
        let getDataSpy = jest
          .spyOn(api, "getData")
          .mockImplementation(() => Promise.reject(error));

        let dispatch = jest.fn();
        let actionfn = fetchMakesList();
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

  describe("FETCH_SUCCESS_MAKES", () => {
    it("should return FETCH_SUCCESS_MAKES action obj", () => {
      let dataItem = [{ id: 1 }, { id: 2 }];
      let result = fetchSuccess(dataItem);
      expect(result).toStrictEqual({
        type: FETCH_SUCCESS_MAKES,
        payload: dataItem,
      });
    });
  });

  describe("FETCH_FAILURE_MAKES", () => {
    it("should return FETCH_FAILURE_MAKES action obj", () => {
      let error = { message: "error occured" };
      let result = fetchFailure(error);
      expect(result).toStrictEqual({
        type: FETCH_FAILURE_MAKES,
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
