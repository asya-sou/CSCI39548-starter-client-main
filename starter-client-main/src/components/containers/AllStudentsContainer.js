import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllStudentsThunk , addStudentThunk, deleteStudentThunk } from "../../store/thunks";
import AllStudentsView from "../views/AllStudentsView";
import {useState} from 'react'

class AllStudentsContainer extends Component {
  /* constructor(props) {
    super(props);
    this.state = {
      showForm: false
    };
    this.onAddClick = this.onAddClick.bind(this);
  }

  onAddClick () {
    this.setState({showForm: true});
    console.log (this.state.showForm)
  }  */


  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllStudents();
  }


  render() {
    return (
      <AllStudentsView
        allStudents={this.props.allStudents}
        deleteStudent={this.props.deleteStudent}
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
  };
};

// Type check props;
AllStudentsContainer.propTypes = {
  allStudents: PropTypes.array.isRequired,
  fetchAllStudents: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllStudentsContainer);