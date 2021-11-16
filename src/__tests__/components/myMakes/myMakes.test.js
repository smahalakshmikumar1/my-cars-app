import MyMakes from "../../../components/myMakes/MyMakes";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../../components/redux/reducers";
import { mount, shallow } from "enzyme";
import { Router } from "react-router-dom";

describe("Given myMakes comp", () => {
  let wrapper;
  let mockAppstore;
  let dispatch = jest.fn();
  let mockHistory = { push: jest.fn(), listen: jest.fn(), location: {} };

  beforeEach(() => {
    //redux
    mockAppstore = createStore(rootReducer, {
      makeList: {
        makesList: ["ALFA ROMEO", "AUDI", "AUSTIN", "BARKAS", "BMW"],
      },
    });

    wrapper = mount(
      <Router history={mockHistory}>
        <Provider store={mockAppstore}>
          <MyMakes />
        </Provider>
      </Router>
    );
  });

  it("should render myMakes comp", () => {
    expect(wrapper).toHaveLength(1);
  });
});
