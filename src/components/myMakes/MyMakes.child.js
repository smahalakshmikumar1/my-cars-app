import React, { useState } from "react";
import CardComponent from "../../UI/cardComponent/CardComponent";
import { CAR_IMAGE } from "../../constants";
import "./MyMakes.css";
import HeaderSection from "../../UI/HeaderSection";

/*My Makes List presentation component
 * @returns My Makes List presentation page component
 * @param {array} datasource- data to populate selected vehicle
 * @param {boolean} isLoading- Loading bar
 *
 */

const MyMakesChild = ({ makesListData, onViewModels, isLoading }) => {
  const [search, setSearch] = useState("");
  let dataList = makesListData;

  /*triggers parent view model
   */
  const callOnViewModels = (data) => {
    onViewModels(data);
  };

  //filtering Data
  let filteredData =
    search.length === 0
      ? makesListData
      : makesListData.filter((data) =>
          data.toLowerCase().includes(search.toLowerCase())
        );
  dataList = filteredData;

  return (
    <div class="container-fluid">
      <HeaderSection title={`Car Makes`} isLoading={isLoading} />
      <div class="wrapper">
        <input
          type="text"
          class="search"
          placeholder="Search Make"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
      <div class="main">
        {dataList.length > 0 ? (
          <>
            {dataList.map((data) => (
              <CardComponent title={data} imageSrc={CAR_IMAGE}>
                <button
                  id="viewButton"
                  class="view-button"
                  type="button"
                  onClick={() => callOnViewModels(data)}
                >
                  View Model
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
export default React.memo(MyMakesChild);
