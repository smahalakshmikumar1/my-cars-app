import MyMakesChild from "../../../components/myMakes/MyMakes.child";
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
      makeList: {
        makesList: ["ALFA ROMEO", "AUDI", "AUSTIN", "BARKAS", "BMW"],
      },
    });
    let makesListData = mockAppstore.getState().makeList?.makesList;
    wrapper = mount(
      <Router history={mockHistory}>
        <Provider store={mockAppstore}>
          <MyMakesChild
            makesListData={makesListData}
            onViewModels={onViewModels}
          />
        </Provider>
      </Router>
    );
  });

  it("should render MyMakes comp", () => {
    expect(wrapper).toHaveLength(1);
    console.log(wrapper.debug());
  });
});
