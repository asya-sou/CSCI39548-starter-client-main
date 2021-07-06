import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllCampusesThunk } from "../../store/thunks";
import { AllCampusesView } from "../views";
import { deleteCampusThunk } from "../../store/thunks";

class AllCampusesContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllCampuses();
  }

/*****************DELETE CAMP***********************************/
  deleteCamp(id) {
    console.log({id});
    this.props.deleteCampusThunk(id);
  }

 /*   deleteCamp = (id) => {
    return{
      //getting campus ID from url
    deleteCampus: () => deleteCampusThunk(id);
    };
}; */

  render() {
    return (
      <AllCampusesView
        allCampuses={this.props.allCampuses}
        deleteCamp={this.deleteCamp}
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

/* const mapDelete = (dispatch) => {
return {
    deleteCampus: () => dispatch(deleteCampusThunk()),
  };
} */

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

const mapDelete = (dispatch) => {
  return {
    deleteCampus: () => dispatch(deleteCampusThunk()),
  };
};



// Type check props;
AllCampusesContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
  deleteCampus: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch /*, mapDelete */)(AllCampusesContainer);