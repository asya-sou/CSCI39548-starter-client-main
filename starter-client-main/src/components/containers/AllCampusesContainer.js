import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AllCampusesView } from "../views";
import { fetchAllCampusesThunk } from "../../store/thunks";
import { deleteCampusThunk} from "../../store/thunks";
import {  addCampusThunk } from "../../store/thunks";
import { editCampusThunk } from "../../store/thunks";

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
        addCampus={this.props.addCampus}
        editCampus={this.props.editCampus}
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
    deleteCampus: (campusId) => dispatch(deleteCampusThunk(campusId)),
    addCampus: (campus) => dispatch(addCampusThunk(campus)),
    editCampus: (campus) => dispatch(editCampusThunk(campus))
  };
};

// Type check props;
AllCampusesContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
  /* deleteCampus: PropTypes.func.isRequired, */
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllCampusesContainer);