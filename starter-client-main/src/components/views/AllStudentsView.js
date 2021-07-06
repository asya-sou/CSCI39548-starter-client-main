import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { VscError } from "react-icons/vsc";

const AllStudentsView = (props) => {

  if (!props.allStudents.length) {
    return <div>There are no students.</div>;
  }

  return (

    <div>
      {props.allStudents.map((student) => (
        <tr>
          <div key={student.id}>

          <td>
            <Link to={`/student/${student.id}`}>
              <h1>{student.lastName}, {student.firstName}</h1>
            </Link> 
          </td>

          <td>
              <VscError style ={{color: 'indigo', cursor: 'pointer'}} onClick={() => console.log("hello")}   />
          </td>

          </div>
        </tr>
      ))}
      <Link to={'/'} >
            <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              HOME
            </Button>
      </Link> 

     
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;