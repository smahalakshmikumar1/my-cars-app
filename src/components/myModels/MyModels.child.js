import React, { useState } from "react";
import CardComponent from "../../UI/cardComponent/CardComponent";
import { CAR_IMAGE } from "../../constants";
import HeaderSection from "../../UI/HeaderSection";
import "../myMakes/MyMakes.css";

/**
 *  MyModels  presentation comp
 * @returns MyModelsChild
 * @param {array} modelsListData- data to populate selected models vehicle
 * @param {object} make- data to populate make of vehicle
 * @param {boolean} isLoading- Loading bar

 */

const MyModelsChild = ({ modelsListData, onViewModels, make, isLoading }) => {
  let dataList = modelsListData;
  const [search, setSearch] = useState("");

  /* @returns on selected make click,calls parent view model
   */
  const callOnViewModels = (modelName) => {
    onViewModels(modelName);
  };

  //filtering Data
  let filteredData =
    search.length === 0
      ? modelsListData
      : modelsListData.filter((data) =>
          data.toLowerCase().includes(search.toLowerCase())
        );
  dataList = filteredData;

  return (
    <div class="container-fluid">
      <HeaderSection title={`${make}- Models`} isLoading={isLoading} />
      <div class="wrapper">
        <input
          type="text"
          class="search"
          placeholder="Search Model"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>

      <div class="main">
        {dataList.length > 0 ? (
          <>
            {dataList?.map((data) => (
              <CardComponent title={data} imageSrc={CAR_IMAGE}>
                <button
                  class="view-button"
                  type="button"
                  onClick={() => callOnViewModels(data)}
                >
                  View Vehicles
                </button>
              </CardComponent>
            ))}
          </>
        ) : (
          <h1>No data Found</h1>
        )}
      </div>
    </div>
  );
};
export default React.memo(MyModelsChild);
