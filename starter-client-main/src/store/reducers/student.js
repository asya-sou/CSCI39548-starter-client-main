import * as at from "../actions/actionTypes";

// REDUCER;
const student = (state={}, action) => {
  switch (action.type) {
    case at.FETCH_STUDENT:
      return action.payload;
    case at.EDIT_STUDENT:
      return state.map(student => { 
        return (
          student.id===action.payload.id ? action.payload : student
        );
      });
    default:
      return state;
  }
};

export default student;