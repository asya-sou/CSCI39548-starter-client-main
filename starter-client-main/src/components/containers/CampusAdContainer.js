import React, { Component } from "react";
import CampusAdView from "../views/CampusAdView";
import { fetchCampusThunk } from "../../store/thunks";
import { connect } from "react-redux";

class CampusAdContainer extends Component {

  async componentDidMount() {
        this.props.fetchCampus(this.props.match.params.id);
  }


    render() {
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