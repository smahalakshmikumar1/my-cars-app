import React from "react";
import { CAR_IMAGE } from "../../constants";
import CardComponent from "../../UI/cardComponent/CardComponent";
import Modal from "../../UI/modal/modal";
import HeaderSection from "../../UI/HeaderSection";
import ItemDescriptionComponent from "../../UI/itemDescriptionComponent/ItemDescriptionComponent";

/**
 *  vehicle component  presentation comp
 * @returns MyVehiclesChild
 * @param {array} datasource- data to populate selected vehicle
 * @param {boolean} isLoading- Loader bar
 * @param {object} make- make of car
 * @param {object} model-model of car */

const MyVehiclesChild = ({ dataSource, addCar, make, model, isLoading }) => {
  /*triggers parent callback
  @returns call back function
  */
  const callAddCar = (data) => {
    addCar(data);
  };
  return (
    <div class="container-fluid">
      <HeaderSection
        title={`List of Vehicles in ${make}-${model}`}
        isLoading={isLoading}
      />
      <div class="main">
        {dataSource?.map((data) => (
          <CardComponent title={data.make} imageSrc={CAR_IMAGE}>
            <ItemDescriptionComponent data={data}>
              <button
                class="view-button"
                type="button"
                onClick={() => callAddCar(data)}
              >
                Add Vehicle
              </button>
            </ItemDescriptionComponent>
          </CardComponent>
        ))}
      </div>
    </div>
  );
};
export default React.memo(MyVehiclesChild);
