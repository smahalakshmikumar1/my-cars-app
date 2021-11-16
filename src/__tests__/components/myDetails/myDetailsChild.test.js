import MyDetailsChild from "../../../components/myDetails/MyDetails.child";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../../components/redux/reducers";
import { mount, shallow } from "enzyme";
import { Router } from "react-router-dom";

describe("Given myDetailsChild comp", () => {
  let wrapper;
  let mockAppstore;
  let deleteAll = jest.fn();
  let deleteCar = jest.fn();
  let mockHistory = { push: jest.fn(), listen: jest.fn(), location: {} };

  beforeEach(() => {
    //redux
    mockAppstore = createStore(rootReducer, {
      myDetailList: {
        myDetailsList: ["ALFA ROMEO", "AUDI", "AUSTIN", "BARKAS", "BMW"],
      },
    });
    let myDetailsList = mockAppstore.getState().myDetailList?.myDetailsList;
    wrapper = mount(
      <Router history={mockHistory}>
        <Provider store={mockAppstore}>
          <MyDetailsChild
            dataSource={myDetailsList}
            deleteCar={deleteCar}
            deleteAll={deleteAll}
            isLoading="false"
          />
        </Provider>
      </Router>
    );
  });

  it("should render MyDetails comp", () => {
    expect(wrapper).toHaveLength(1);
    console.log(wrapper.debug());
  });
});
