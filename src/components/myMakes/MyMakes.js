import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMakesList } from "../redux/actions/makesAction";
import MyMakesChild from "./MyMakes.child";

/*
My Makes List component
* @returns MyDetails page component
*/

const MyMakes = () => {
  //getting list from store
  const makesListData = useSelector((state) => state?.makeList?.makesList);
  let isLoading = useSelector((state) => state?.makeList?.isLoading);
  let dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    //fetching the List of makes
    try {
      //dispatching api action through thunk,storing in redux and displaying
      dispatch(fetchMakesList());
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  /*
   * @returns moving to makes page
   */
  const onViewModels = (make) => {
    history.push("/models", make);
  };

  return (
    <div class="container-fluid">
      <MyMakesChild
        makesListData={makesListData}
        onViewModels={onViewModels}
        isLoading={isLoading}
      />
    </div>
  );
};
export default React.memo(MyMakes);
