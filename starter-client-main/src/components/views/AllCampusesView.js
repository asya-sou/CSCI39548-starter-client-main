import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { VscError } from "react-icons/vsc";
import { deleteCampusThunk } from "../../store/thunks";
import { deleteCampus } from "../../store/actions/actionCreators";


const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return <div>There are no campuses.</div>;
  }

/* const handleDelete = (e) => {
   this.props.deleteCamp(e);
  } */

  return (
    <div>
    <table>
    <tbody>
      {props.allCampuses.map((campus) => (
        <tr key={campus.id}>
            <td><img src={campus.imageUrl} width="150" alt="Campus"/></td>
            
            <td><Link to={`/campus/${campus.id}`}> <h1>{campus.name}</h1> </Link> </td>
            
            {/******************************************ATTEMPT AT DELETE BUTTON***************************************************/}
            <td> <VscError 
              key={campus.id} 
              style ={{color: 'indigo', cursor: 'pointer', width: '50'}} 
              onClick={() => this.props.deleteCampus(campus.id)} />
              {/* onClick={() => mapDelete()} */}
              {/* onClick={() => deleteCamp(campus.id)} */}
              {/* onClick={() => this.props.deleteCamp(campus.id)} */}
              {/* onClick={() => this.deleteCamp(campus.id)} */}
              {/* onClick={() => this.props.deleteCampus(campus.id)} */}
              {/* onClick={() => this.deleteCampusThunk(campus.id) */}
              {/* onClick={() => deleteCampusThunk(campus.id)} */}
              {/* onClick={() => this.props.deleteCampusThunk(campus.id)} */}
              {/* onClick={() => props.allCampus.deleteCampusThunk(campus.id)} */}
              {/* onClick={() => this.allCampus.deleteCampusThunk(campus.id)} */}
            </td>

        </tr>        
      ))}
      </tbody>
      </table>
      <Link to={'/'} >
            <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              HOME
            </Button>
      </Link> 
      </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;