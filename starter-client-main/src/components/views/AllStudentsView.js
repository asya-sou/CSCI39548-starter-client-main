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
        <div key={student.id}>
          <Link to={`/student/${student.id}`}>
            <h1>{student.lastName}, {student.firstName}</h1>
          </Link>
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

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;