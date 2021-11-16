import MyVehiclesChild from "../../../components/myVehicles/MyVehicles.child";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../../components/redux/reducers";
import { mount, shallow } from "enzyme";
import { Router } from "react-router-dom";

describe("Given MyMakesChild comp", () => {
  let wrapper;
  let mockAppstore;
  let dispatch = jest.fn();
  let onViewModels = jest.fn();
  let mockHistory = { push: jest.fn(), listen: jest.fn(), location: {} };

  beforeEach(() => {
    //redux
    mockAppstore = createStore(rootReducer, {
      vehicleList: {
        vehiclesList: ["ALFA ROMEO", "AUDI", "AUSTIN", "BARKAS", "BMW"],
      },
    });
    let vehicleList = mockAppstore.getState().vehicleList?.vehiclesList;
    wrapper = mount(
      <Router history={mockHistory}>
        <Provider store={mockAppstore}>
          <MyVehiclesChild vehicleList={vehicleList} />
        </Provider>
      </Router>
    );
  });

  it("should render MyVehiclesChild comp", () => {
    expect(wrapper).toHaveLength(1);
    console.log(wrapper.debug());
  });
});
