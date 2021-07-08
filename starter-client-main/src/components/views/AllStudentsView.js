import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { VscError } from "react-icons/vsc";
import {useDispatch} from 'react-redux'
import { deleteStudentThunk } from "../../store/thunks";

const AllStudentsView = (props) => {
  const dispatch = useDispatch()

  if (!props.allStudents.length) {
    return <div>There are no students.</div>;
  }

  return (
    <div>
      <table>
        <tbody>
          {props.allStudents.map((student) => (
            <tr key={student.id}>

              <td>
                <Link to={`/student/${student.id}`}>
                  <h1>{student.lastName}, {student.firstName}</h1>
                </Link> 
              </td>

              <td>
                  <Button 
                  variant="contained" color="primary"
                  style={{marginLeft: '10px'}}
                  /* style ={{color: 'indigo', cursor: 'pointer', width: '50'}} */
                  onClick={() => dispatch(deleteStudentThunk(student.id)) }> X </Button>
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

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;