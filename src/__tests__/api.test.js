import axios from "axios";
import { getData, postData, putData } from "../../src/api/api";

jest.mock("axios");
describe("given api call", () => {
  describe("when get Data", () => {
    describe("when success", () => {
      it("should return success", async () => {
        let response = { data: [{ id: 1 }, { id: 1 }] };
        axios.get.mockImplementation(() => Promise.resolve(response));
        await expect(getData("makes")).resolves.toEqual(response);
      });
    });

    describe("when failure", () => {
      it("should return failure", async () => {
        let error = "error occured";
        axios.get.mockImplementation(() => Promise.reject(new Error(error)));
        await expect(getData("makes")).rejects.toThrow(error);
      });
    });
  });

  describe("when put Data", () => {
    describe("when success", () => {
      it("should return success", async () => {
        let response = { data: "success" };
        axios.put.mockImplementation(() => Promise.resolve(response));
        await expect(putData("makes", { id: 2, car: "ford" })).resolves.toEqual(
          response
        );
      });
    });

    describe("when failure", () => {
      it("should return failure", async () => {
        let error = "error occured";
        axios.put.mockImplementation(() => Promise.reject(new Error(error)));
        await expect(putData("makes", {})).rejects.toThrow(error);
      });
    });
  });

  describe("when post Data", () => {
    describe("when success", () => {
      it("should return success", async () => {
        let response = { data: "success" };
        axios.post.mockImplementation(() => Promise.resolve(response));
        await expect(
          postData("makes", { id: 2, car: "ford" })
        ).resolves.toEqual(response);
      });
    });

    describe("when failure", () => {
      it("should return failure", async () => {
        let error = "error occured";
        axios.post.mockImplementation(() => Promise.reject(new Error(error)));
        await expect(postData("makes", {})).rejects.toThrow(error);
      });
    });
  });
});
