import React from "react";
import { CAR_IMAGE } from "../../constants";
import CardComponent from "../../UI/cardComponent/CardComponent";
import HeaderSection from "../../UI/HeaderSection";
import ItemDescriptionComponent from "../../UI/itemDescriptionComponent/ItemDescriptionComponent";

/**
 *  MyDetails  presentation comp
 * @returns MyDetailsChild
 * @param {array} datasource- data to populate selected vehicle
 * @param {function} deleteCar- call back function to trigger delete
 * @param {function} deleteAll- call back function to trigger delete all
 * @param {boolean} isLoading- Loading bar

 */
const MyDetailsChild = ({ dataSource, deleteCar, deleteAll, isLoading }) => {
  /*triggers parent delete
  @param id-{number}
  */
  const callDeleteCar = (id) => {
    deleteCar(id);
  };

  /*triggers parent delete all
   */
  const callDeleteAll = (id) => {
    deleteAll();
  };

  return (
    <div class="container-fluid">
      <HeaderSection title={`My Car Details`} isLoading={isLoading} />
      {dataSource?.length > 0 ? (
        <button
          class="view-button"
          type="button"
          onClick={() => callDeleteAll()}
        >
          Clear Vehicles
        </button>
      ) : null}
      <div class="main">
        {dataSource?.length > 0 ? (
          <div style={{ display: "flex" }}>
            {dataSource?.map((data, index) => (
              <CardComponent title={data.make} imageSrc={CAR_IMAGE}>
                <ItemDescriptionComponent data={data}>
                  <button
                    class="view-button"
                    type="button"
                    onClick={() => callDeleteCar(index)}
                  >
                    Delete Vehicle
                  </button>
                </ItemDescriptionComponent>
              </CardComponent>
            ))}
          </div>
        ) : (
          <h1>No data Found</h1>
        )}
      </div>
    </div>
  );
};
export default React.memo(MyDetailsChild);
