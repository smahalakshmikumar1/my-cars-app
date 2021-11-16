import React from "react";
import MyDetailsChild from "./MyDetails.child";
import { useDispatch, useSelector } from "react-redux";
import {
  RemoveFromMyVehicles,
  ClearVehicles,
} from "../redux/actions/myDetailsAction";

/**
 *  MyDetails
 * @returns MyDetails page component
 */
const MyDetails = () => {
  let dispatch = useDispatch();
  //getting  vehicles list,setloader from store
  let { myDetailsList } = useSelector((state) => state?.myDetails);
  let isLoading = useSelector((state) => state?.myDetails?.isLoading);

  /*
  @returns dispatching action data to delete vehicles action
  */
  const deleteCar = (id) => {
    dispatch(RemoveFromMyVehicles(id));
  };

  /*
  @returns dispatching action data to delete all vehicles action
  */
  const deleteAll = () => {
    dispatch(ClearVehicles());
  };

  return (
    <div class="container-fluid">
      <MyDetailsChild
        dataSource={myDetailsList}
        deleteCar={deleteCar}
        deleteAll={deleteAll}
        isLoading={isLoading}
      />
    </div>
  );
};
export default React.memo(MyDetails);
