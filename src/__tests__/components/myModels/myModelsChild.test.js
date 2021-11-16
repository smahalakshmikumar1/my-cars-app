import MyModelsChild from "../../../components/myModels/MyModels.child";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../../components/redux/reducers";
import { mount, shallow } from "enzyme";
import { Router } from "react-router-dom";

describe("Given myModelsChild comp", () => {
  let wrapper;
  let mockAppstore;
  let dispatch = jest.fn();
  let onViewModels = jest.fn();
  let mockHistory = { push: jest.fn(), listen: jest.fn(), location: {} };

  beforeEach(() => {
    //redux
    mockAppstore = createStore(rootReducer, {
      modelList: {
        modelsList: ["fiesta", "1er"],
      },
    });
    let modelsListData = mockAppstore.getState().modelList?.modelsList;
    wrapper = mount(
      <Router history={mockHistory}>
        <Provider store={mockAppstore}>
          <MyModelsChild
            modelsListData={modelsListData}
            onViewModels={onViewModels}
            make={"ford"}
          />
        </Provider>
      </Router>
    );
  });

  it("should render myModelsChild comp", () => {
    expect(wrapper).toHaveLength(1);
    console.log(wrapper.debug());
  });
});
