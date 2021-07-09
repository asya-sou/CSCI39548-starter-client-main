import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk } from "../../store/thunks";
import { editStudentThunk } from "../../store/thunks";
import StudentView from "../views/StudentView";
import { Redirect } from "react-router";
class StudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect:false,
      redirectId: null
    }
  }
  componentWillUnmount() {
    this.setState({redirect: false, redirectId: null});
}
  componentDidMount() {
    //getting campus ID from url
    this.props.fetchStudent(this.props.match.params.id);
  }

  render() {
    if(this.state.redirect) {
      return (<Redirect to={`/student/${this.state.redirectId}`}/>)
    }

    return (
      <StudentView 
        student={this.props.student}
        editStudent={this.props.editStudent}
        setRedirect={this.setRedirect}
        setRedirectId={this.setRedirectId}
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
    setRedirect: (value) => this.setState({redirect: value}),
    setRedirectId: (value) => this.setState({redirectId: value})
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);