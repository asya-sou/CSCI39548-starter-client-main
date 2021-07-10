import React, { Component } from "react";
import AdView from "../views/AdView";
import { fetchStudentThunk } from "../../store/thunks";
import { connect } from "react-redux";
import { Redirect } from "react-router";

class AdContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect:false,
    }
   };  
  async componentDidMount() {
        // getting student ID from url       
         console.log('your ad!')
         var currentUrl = window.location.pathname;
         var urlLength = currentUrl.length - 3;

         var redirectUrl = currentUrl.substr(0,urlLength);
         console.log(redirectUrl);  

/*          console.log(window.location.href);  
 */         
        let truth = await setTimeout(function(){ }, 3000);
        /* this.setState({redirect: true}) */

        <Redirect to={redirectUrl}/>
        console.log(truth)

       }


    render() {
     /*  if (this.state.redirect) {
        return(
        <Redirect to={redirectUrl}/>
        );
      } */
      return (
        <AdView student={this.props.student}/>
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