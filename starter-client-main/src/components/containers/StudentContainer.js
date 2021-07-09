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
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      imageUrl: '',
      gpa: 0.0,
      campusId: 0,
      redirect:false,
      redirectId:null
    }
  };  

/*   componentWillUnmount() {
    this.setState({redirect: false, redirectId: null});
} */
componentDidMount() {
  //getting student ID from url
   this.props.fetchStudent(this.props.match.params.id);
   this.setState({
    id: this.props.id, 
    firstName: this.props.firstName, lastName: this.props.lastName, 
    email: this.props.email, 
    imageUrl: this.props.imageUrl, gpa: this.props.gpa, campusId: this.props.campusId});
  console.log('^ mount')
} 
/* componentWillUnmount() {
  this.setState({redirect: false, redirectId: null});
} */
handleSubmit = async event => {
  event.preventDefault();

  let edStudent = {
    id: this.state.id, 
    firstName: this.state.firstName, lastName: this.state.lastName, 
    email: this.state.email, 
    imageUrl: this.props.imageUrl, gpa: this.state.gpa, campusId: this.state.campusId
  };
  
  let editedStudent = await this.props.editStudent(edStudent);

  this.setState({
    id: 0,
      firstName: '',
      lastName: '',
      email: '',
      imageUrl: '',
      gpa: 0.0,
      campusId: 0,
      redirect:false,
      redirectId: edStudent.id
  });
}
handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  });
}
/* useEffect() {
  this.props.fetchStudent(this.props.match.params.id);
  console.log('^ effect')

} */

setInfo
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
    if(this.state.redirect) {
      return (<Redirect to={`/student/${this.state.redirectId}`}/>)
    }
    return (
      <StudentView 
        student={this.props.student}
        editStudent={this.props.editStudent}
        setNewRender={this.setNewRender}
        handleChange = {this.handleChange} 
          handleSubmit={this.handleSubmit}     
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