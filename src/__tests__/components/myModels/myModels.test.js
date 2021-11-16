import MyModels from "../../../components/myModels/MyModels";
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
      modelList: {
        modelsList: ["fiesta", "1er"],
      },
    });

    wrapper = mount(
      <Router history={mockHistory}>
        <Provider store={mockAppstore}>
          <MyModels />
        </Provider>
      </Router>
    );
  });

  it("should render myMake comp", () => {
    expect(wrapper).toHaveLength(1);
  });
});
