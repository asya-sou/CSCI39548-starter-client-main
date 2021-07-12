import * as at from "../actions/actionTypes";
const initialState = {
  campus: {},
};
// REDUCER;
const student = (state={}, action) => {
  switch (action.type) {
    case at.FETCH_STUDENT:
      return action.payload;
    default:
      return state;
  }
};

export default student;