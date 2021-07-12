import React, { Component } from "react";
import AdView from "../views/AdView";
import { fetchStudentThunk } from "../../store/thunks";
import { connect } from "react-redux";
class AdContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect:false,
    }
   };  

  async componentDidMount() {
        this.props.fetchStudent(this.props.match.params.id);

        // getting student ID from url       
         console.log('your ad!')
         var currentUrl = window.location.pathname;
         var urlLength = currentUrl.length - 3;

         const redirectUrl = currentUrl.substr(0,urlLength);
         console.log(redirectUrl);  

       }


    render() {
      return (
        <AdView 
        student={this.props.student}/>
      );
   } 
};

const mapDispatch = (dispatch) => {
    return {
      fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    };
  };

const mapState = (state) => {
    return {
      student: state.student,
    };
    
  };
  
export default connect(mapState, mapDispatch)(AdContainer);