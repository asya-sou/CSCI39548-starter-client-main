import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllStudentsThunk , addStudentThunk, deleteStudentThunk } from "../../store/thunks";
import AllStudentsView from "../views/AllStudentsView";
class AllStudentsContainer extends Component {

  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllStudents();
  }


  render() {
    return (
      <AllStudentsView
        allStudents={this.props.allStudents}
        deleteStudent={this.props.deleteStudent}
        addStudent={this.props.addStudent}
      />
    );
  }
}


// Map state to props;
const mapState = (state) => {
  return {
    allStudents: state.allStudents,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    deleteStudent: (studentId) => dispatch(deleteStudentThunk(studentId)),
    addStudent: (student) => dispatch(addStudentThunk(student)),
  };
};

// Type check props;
AllStudentsContainer.propTypes = {
  allStudents: PropTypes.array.isRequired,
  fetchAllStudents: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllStudentsContainer);