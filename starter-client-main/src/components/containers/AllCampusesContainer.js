import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllCampusesThunk } from "../../store/thunks";
import { AllCampusesView } from "../views";
import { deleteCampusThunk, addCampusThunk, editCampusThunk } from "../../store/thunks";
class AllCampusesContainer extends Component {

  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllCampuses();
  }


  render() {
    return (
      <AllCampusesView
        allCampuses={this.props.allCampuses}
        deleteCampus={this.props.deleteCampus}
      />
    );
  }
}


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
    deleteCampus: (campusId) => dispatch(deleteCampusThunk(campusId))
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