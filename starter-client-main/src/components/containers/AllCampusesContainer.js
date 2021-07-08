import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllCampusesThunk } from "../../store/thunks";
import { AllCampusesView } from "../views";
import { deleteCampusThunk } from "../../store/thunks";
import { deleteCampus } from "../../store/actions/actionCreators";
import {useDispatch} from 'react-redux'

class AllCampusesContainer extends Component {


  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllCampuses();
  }


/*   deleteCamp(id) {
    dispatch(deleteCampusThunk(id));
  } */
/*****************DELETE CAMP***********************************/
 /*  deleteCamp(id) {
    console.log({id});
    this.props.deleteCampusThunk(id);
  } */

  /* deleteCamp(id) {
    console.log({id});
    this.deleteCampusThunk(id);
  } */

 /*   deleteCamp = (id) => {
    return{
      //getting campus ID from url
    deleteCampus: () => deleteCampusThunk(id);
    };
}; */

  /* deleteCamp = (id) => {
    useDispatch(deleteCampusThunk(id))
  } */

  render() {
    return (
      <AllCampusesView
        allCampuses={this.props.allCampuses}
        /*deleteCamp={this.deleteCamp}*/
      />
    );
  }
}


/*****************DELETE CAMP***********************************/
/* const mapDelete = (dispatch) => {
return {
    deleteCampus: () => dispatch(deleteCampusThunk()),
  };
} */

/* const deleteCamp = (dispatch) => {
  return {
    deleteCamp: (id) => dispatch(deleteCampusThunk(id)),
  };
};
 */
//DW https://www.digitalocean.com/community/tutorials/redux-redux-thunk
 /* const mapDelete = (dispatch) => {
  return {
    onDeleteCampus: (campusId) => {dispatch(deleteCampusThunk(campusId));}
  };
};  */

/* const mapDelete = (campusId) => {
  return {
    deleteCampus: (campusId) => deleteCampusThunk(campusId),
  };
}; */



// Map state to props;
const mapState = (state) => {
  return {
    allCampuses: state.allCampuses,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
  };
};

/* function deleteCamp(id) {
  return function(dispatch) {
   return dispatch(deleteCampusThunk(id))
  }
 }; */


// Type check props;
AllCampusesContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
  /* deleteCampus: PropTypes.func.isRequired, */
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch, /* deleteCamp */ /* mapDelete */)(AllCampusesContainer);