import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const StudentView = (props) => {
  const {student} = props;
/*   if (!campus.students.length) {
    return (<p>No students are enrolled at this time</p>);
  } */

  return (
    <div>
      <img src={student.imageUrl} height="200" alt="Student"/>      
      <h1>{student.firstName} {student.lastName}</h1>
      <p>Campus: {student.campusId ? <Link to={`/campus/${student.campusId}`}> {student.campus.name} </Link> : "Student is not currently enrolled" }</p>
      <p>Email: {student.email}</p>
      <p>GPA: {student.gpa}</p>
      <Link to={'/'} >
            <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              HOME
            </Button>
      </Link> 
      <Link to={'/students'} >
            <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              ALL STUDENTS
            </Button>
      </Link> 
    </div>
  );

};

export default StudentView;