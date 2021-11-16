import MyDetails from "../../../components/myDetails/MyDetails";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../../components/redux/reducers";
import { mount, shallow } from "enzyme";
import { Router } from "react-router-dom";

describe("Given myDetailsChild comp", () => {
  let wrapper;
  let mockAppstore;
  let dispatch = jest.fn();
  let mockHistory = { push: jest.fn(), listen: jest.fn(), location: {} };

  beforeEach(() => {
    //redux
    mockAppstore = createStore(rootReducer, {
      myDetailList: {
        myDetailsList: ["ALFA ROMEO", "AUDI", "AUSTIN", "BARKAS", "BMW"],
      },
    });

    wrapper = mount(
      <Router history={mockHistory}>
        <Provider store={mockAppstore}>
          <MyDetails />
        </Provider>
      </Router>
    );
  });

  it("should render myDetailsChild comp", () => {
    expect(wrapper).toHaveLength(1);
  });
});
