import {useState} from 'react'
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const CampusView = (props) => {
  const {campus, editCampus} = props;
  const [showEdit, setShowEdit] = useState (false)

  return (
    <div className="root">
    {/* ----------------- NAV BAR ---------------- */} 
    <AppBar position="static" elevation={0} className="appBar">
      <Toolbar className="appBar">
        <Typography variant="h6" className="navTitle" >
          {campus.name}
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
            EDIT CAMPUS
          </Button> 
          )}

      </Toolbar>
    </AppBar>

{/* --------------------------------- CAMPUS INFO --------------------------------------------- */}
      <img src={campus.imageUrl} width="200" alt="Campus"/>      
      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <p>{campus.description}</p>


      <ul>
      { !campus.students.length ? "No students are enrolled at this time" :
        campus.students.map(  student => {
        let name = student.firstName + " " + student.lastName;
        return (<li> <Link to={`/student/${student.id}`}>{name}</Link> </li> );
      })}
      </ul>

    </div>
  );

};

export default CampusView;