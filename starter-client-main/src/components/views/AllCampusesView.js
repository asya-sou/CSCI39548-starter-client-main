import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { VscError } from "react-icons/vsc";

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return <div>There are no campuses.</div>;
  }

  /* handleDelete = (e) => {
    this.deleteCampus();
  } */

  return (
    <div>
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
        <tr>
          <td><img src={campus.imageUrl} width="150" alt="Campus"/></td>
          <td><Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          </td>
         {/*  <p>{campus.description}</p> */}
         <td>
            <VscError color ='indigo'  />
          </td>
          </tr>
          </div>
        
      ))}
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