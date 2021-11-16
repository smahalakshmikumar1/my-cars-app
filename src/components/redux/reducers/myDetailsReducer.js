import {
  ADD_TO_MYVEHICLES,
  REMOVE_FROM_MYVEHICLES,
  CLEAR_MYVEHICLES,
} from "../actions/actionTypes";

const initialState = {
  myDetailsList: [],
  isLoading: false,
};

const MyDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_MYVEHICLES:
      let updatedCart = {
        ...state,
        myDetailsList: [...state.myDetailsList, action.payload],
      };
      return updatedCart;
    case REMOVE_FROM_MYVEHICLES:
      let updated = {
        ...state,
        myDetailsList: state.myDetailsList.filter((item) => {
          var id = state.myDetailsList.indexOf(item);
          return id !== action.payload;
        }),
      };
      return updated;

    case CLEAR_MYVEHICLES:
      return initialState;
    default:
      return state;
  }
};

export default MyDetailsReducer;
