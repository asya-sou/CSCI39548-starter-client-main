import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { VscError } from "react-icons/vsc";
import { deleteCampusThunk } from "../../store/thunks";
import {useDispatch} from 'react-redux'

const AllCampusesView = (props) => {
  const dispatch = useDispatch()

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
            <td> <Button 
                  variant="contained" color="primary"
                  style={{marginLeft: '10px'}}
                  /* style ={{color: 'indigo', cursor: 'pointer', width: '50'}} */
                  onClick={() => dispatch(deleteCampusThunk(campus.id)) }> X </Button>
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