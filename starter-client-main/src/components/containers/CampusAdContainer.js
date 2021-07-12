import React, { Component } from "react";
import CampusAdView from "../views/CampusAdView";
import { fetchCampusThunk } from "../../store/thunks";
import { connect } from "react-redux";

class CampusAdContainer extends Component {
/*   constructor(props) {
    super(props);
    this.state = {
      redirect:false,
    }
   };   */

  async componentDidMount() {
        this.props.fetchCampus(this.props.match.params.id);

        // getting student ID from url       
        /*  console.log('your ad!')
         var currentUrl = window.location.pathname;
         var urlLength = currentUrl.length - 3;

         const redirectUrl = currentUrl.substr(0,urlLength);
         console.log(redirectUrl);  

        console.log(window.location.href);  
       
        let truth = await setTimeout(function() {  }, 1500);
         this.setState({redirect: true}) 

       <Redirect to={`${redirectUrl}`}/>
        console.log(<Redirect to={`${redirectUrl}`}/>)  */

       }


    render() {
      /*  if (this.state.redirect) {
        return(
        <Redirect to={`student/${this.props.match.params.id}`}/>
        );
      }  */

      return (
        <CampusAdView 
        campus={this.props.campus}/>
      );
   } 
};

const mapDispatch = (dispatch) => {
    return {
      fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    };
  };

const mapState = (state) => {
    return {
      campus: state.campus,
    };
    
  };
  
export default connect(mapState, mapDispatch)(CampusAdContainer);