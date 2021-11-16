import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../UI/header/Header";
import { getData } from "../../api/api";
import CardComponent from "../../UI/cardComponent/CardComponent";
import { CAR_IMAGE } from "../../constants";
import { fetchModelsList } from "../redux/actions/ModelActions";
import { useDispatch, useSelector } from "react-redux";
import MyModelsChild from "./MyModels.child";

/*My models page component
@returns My models Page
*/
const MyModels = (props) => {
  //getting list from store
  const modelsListData = useSelector((state) => state?.modelList?.modelsList);
  let isLoading = useSelector((state) => state?.modelList?.isLoading);

  let dispatch = useDispatch();
  let make = props?.location?.state;
  const history = useHistory();

  useEffect(() => {
    //fetching the List of makes
    try {
      //dispatching api action through thunk,storing in redux and displaying
      dispatch(fetchModelsList(make));
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  /*on selected make click
  @returns moves to next page
  */
  const onViewModels = (modelName) => {
    let makeModelObj = { make: props?.location?.state, model: modelName };
    history.push("/vehicles", makeModelObj);
  };

  return (
    <div class="container-fluid">
      <MyModelsChild
        onViewModels={onViewModels}
        modelsListData={modelsListData}
        make={make}
        isLoading={isLoading}
      />
    </div>
  );
};
export default React.memo(MyModels);
