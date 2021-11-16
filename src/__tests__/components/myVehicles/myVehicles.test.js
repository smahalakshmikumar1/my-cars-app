import MyVehicles from "../../../components/myMakes/MyMakes";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../../components/redux/reducers";
import { mount, shallow } from "enzyme";
import { Router } from "react-router-dom";

describe("Given myVehicles comp", () => {
  let wrapper;
  let mockAppstore;
  let dispatch = jest.fn();
  let mockHistory = { push: jest.fn(), listen: jest.fn(), location: {} };

  beforeEach(() => {
    //redux
    mockAppstore = createStore(rootReducer, {
      vehicleList: {
        vehiclesList: ["ALFA ROMEO", "AUDI", "AUSTIN", "BARKAS", "BMW"],
      },
    });

    wrapper = mount(
      <Router history={mockHistory}>
        <Provider store={mockAppstore}>
          <MyVehicles />
        </Provider>
      </Router>
    );
  });

  it("should render MyVehicles comp", () => {
    expect(wrapper).toHaveLength(1);
  });
});
