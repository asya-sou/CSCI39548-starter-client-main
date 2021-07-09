import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk } from "../../store/thunks";
import { editStudentThunk } from "../../store/thunks";
import StudentView from "../views/StudentView";
class StudentContainer extends Component {
  componentDidMount() {
    //getting campus ID from url
    this.props.fetchStudent(this.props.match.params.id);
  }

  render() {
    return (
      <StudentView 
        student={this.props.student}
        editStudent={this.props.editStudent}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    student: state.student,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    editStudent: (student) => dispatch(editStudentThunk(student))
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);