import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { fetchStudentThunk } from "../../store/thunks";
import { editStudentThunk } from "../../store/thunks";
import StudentView from "../views/StudentView";
import { Redirect } from "react-router";
class StudentContainer extends Component {
    constructor(props) {
    super(props);
    this.state = {
      render: false,
    }
    this.setNewRender = this.setNewRender.bind(this)
  };  

/*   componentWillUnmount() {
    this.setState({redirect: false, redirectId: null});
} */
componentDidMount() {
  //getting student ID from url
   this.props.fetchStudent(this.props.match.params.id);
  console.log('^ mount')
} 
/* useEffect() {
  this.props.fetchStudent(this.props.match.params.id);
  console.log('^ effect')

} */

setNewRender() {
  this.setState({render: !this.render})
}
/* componentDidUpdate() {
  //getting student ID from url
  this.props.fetchStudent(this.props.match.params.id);
}  */
 /* componentWillReceiveProps(this.props) {
    //getting student ID from url
    this.props.fetchStudent(this.props.match.params.id);
  } */

  render() {

    return (
      <StudentView 
        student={this.props.student}
        editStudent={this.props.editStudent}
        setNewRender={this.setNewRender}
        /*setRedirect={this.setRedirect}
        setRedirectId={this.setRedirectId}*/
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
    editStudent: (student) => dispatch(editStudentThunk(student)),
    /* setRedirect: (value) => this.setState({redirect: value}),
    setRedirectId: (value) => this.setState({redirectId: value}) */
  };
};

/* StudentContainer.propTypes = {
  student: PropTypes.object.isRequired,
  fetchStudent:PropTypes.func.isRequired,
  editStudent: PropTypes.func.isRequired,
}; */
export default connect(mapState, mapDispatch)(StudentContainer);