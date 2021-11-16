import React, { useEffect, useState } from "react";
import MyVehiclesChild from "./MyVehicles.child";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToMyVehicles } from "../redux/actions/myDetailsAction";
import { fetchVehicleList } from "../redux/actions/vehicleAction";

/**
 * selected vehicle page
 * @returns selected vehicle page component
 */
const MyVehicles = (props) => {
  const [isModal, setIsModal] = useState(false);

  let history = useHistory();
  let vehicleData = useSelector((state) => state.vehicleList.vehiclesList);
  let isLoading = useSelector((state) => state?.vehicleList?.isLoading);
  let dispatch = useDispatch();
  let make = props?.location?.state?.make;
  let model = props?.location?.state?.model;

  /**
   *fetching the selected vehicle data
   * @returns axios response
   */
  useEffect(() => {
    dispatch(fetchVehicleList(make, model));
  }, []);

  /*
  @returns dispatching action data to add vehicles action
  */
  const addCar = (data) => {
    setIsModal(true);
    dispatch(addToMyVehicles(data));
    history.push("./details");
  };

  return (
    <div class="container-fluid">
      <MyVehiclesChild
        dataSource={vehicleData}
        addCar={addCar}
        isModal={isModal}
        make={props?.location?.state?.make}
        model={props?.location?.state?.model}
        isLoading={isLoading}
      />
    </div>
  );
};
export default React.memo(MyVehicles);
