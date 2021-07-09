import {useState} from 'react'
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const StudentView = (props) => {
  const {student, editStudent} = props;
  const [showEdit, setShowEdit] = useState (false)


  return (
    <div className="root">
    {/* ----------------- NAV BAR ---------------- */} 
    <AppBar position="static" elevation={0} className="appBar">
      <Toolbar className="appBar">
        <Typography variant="h6" className="navTitle" >
          {student.firstName} {student.lastName}
        </Typography>

        <Link to={'/'} >
          <Button variant="contained" color="primary" style={{marginLeft: '10px'}}>
          HOME
          </Button>
        </Link> 

        <Link to={'/students'} >
          <Button variant="contained" color="primary" style={{marginLeft: '10px'}}>
            All Students
          </Button>
        </Link>

        <Link to={'/campuses'} >
        <Button variant="contained" color="primary" style={{marginLeft: '10px'}}>
              All Campuses
            </Button>
          </Link>

          {/* if showForm false - show EDIT CAMPUS, else - HIDE FORM */}
          {showEdit ? ( 
            <Button 
            variant="contained" color="primary" style={{marginLeft: '10px'}}
            onClick={ () => {setShowEdit(!showEdit)} }>
            HIDE FORM
          </Button> 

          ) : ( 
            <Button 
            variant="contained" color="primary" style={{marginLeft: '10px'}}
            onClick={ () => {setShowEdit(!showEdit)} }>
            EDIT STUDENT
          </Button> 
          )}

      </Toolbar>
    </AppBar>
      <img src={student.imageUrl} height="200" alt="Student"/>      
      <h1>{student.firstName} {student.lastName}</h1>
      <p>Campus: {student.campusId ? <Link to={`/campus/${student.campusId}`}> {student.campus.name} </Link> : "Student is not currently enrolled" }</p>
      <p>Email: {student.email}</p>
      <p>GPA: {student.gpa}</p>
      
    </div>
  );

};

export default StudentView;