import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import {useState} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const AllStudentsView = (props) => {
  
  /*-------------------ADD STUDENT FORM SET-UP ------------------------ */
  const [showForm, setShowForm] = useState (false)
  
  /*ADD STUDENTS FORM STATE DEFINITIONS*/
  var [firstName, setFirstName] = useState ()
  var [lastName, setLastName] = useState ()
  var [email, setEmail] = useState ()
  var [imageUrl, setImageUrl] = useState ()
  var [gpa, setGpa] = useState ()
  var [campusId, setCampusId] = useState ()

  /*dispatch addSTudentsThunk based on form input
  that was initially passed as page state*/
  function addNewStudent(){
    const newStudent = {firstName, lastName, email, imageUrl, gpa, campusId}
    addStudent(newStudent)
  }
  /*------------------- END ADD STUDENT FORM SET-UP ------------------------ */

  const {allStudents, deleteStudent, addStudent} = props;

    /*if no students - message*/
    if (!allStudents.length) {
      return <div>There are no students.</div>;
    } 

  return (
    <div className="root">
      {/* ----------------- NAV BAR ---------------- */} 
      <AppBar position="static" elevation={0} className="appBar">
        <Toolbar className="appBar">
          <Typography variant="h6" className="navTitle" >
            All Students
          </Typography>

          <Link to={'/'} >
            <Button variant="contained" color="primary" style={{marginLeft: '10px'}}>
            HOME
            </Button>
          </Link>

          <Link to={'/campuses'} >
            <Button variant="contained" color="primary" style={{marginLeft: '10px'}}>
              All Campuses
            </Button>
          </Link>

          {/* if showForm false - show ADD STUDENT, else - HIDE FORM */}
          {showForm ? ( 
            <Button 
            variant="contained" color="primary" style={{marginLeft: '10px'}}
            onClick={ () => {setShowForm(!showForm)} }>
            HIDE FORM
          </Button> 

          ) : ( 
            <Button 
            variant="contained" color="primary" style={{marginLeft: '10px'}}
            onClick={ () => {setShowForm(!showForm)} }>
            ADD STUDENT
          </Button> 
          )}
        </Toolbar>
      </AppBar>

      {/* ----------------- ADD STUDENTS FORM ---------------- */} 
      {/* if ADD STUDENT button pressed - shows form below, else shows nothing */}
      {showForm ? (
        <form className="addForm" onSubmit={() => addNewStudent()}>
          <div className='row'>
          <label>First Name<strong></strong> </label> 
          <input required type="text" value={firstName} onChange={(e) =>setFirstName(e.target.value)} placeholder="Required" name="firstName"/>
                    
          <label>Last Name</label> 
          <input required type="text" value={lastName} onChange={(e) =>setLastName(e.target.value)} placeholder="Required" name="lastName"/>
          </div>

          <div className='row'>
          <label>Email</label> 
          <input required type="text" value={email} onChange={(e) =>setEmail(e.target.value)} placeholder="Required" name="email"/>

          <label>Photo URL </label> 
          <input type="text" value={imageUrl} onChange={(e) =>setImageUrl(e.target.value)} placeholder="" name="imageUrl"/>
          </div>

          <div className='row'>

          <label> GPA </label> 
          <input type="number" value={gpa} onChange={(e) => setGpa(e.target.value)} placeholder="" name="gpa"/>

          <label> Campus </label> 
          <input type="text" value={campusId} onChange={(e) => setCampusId(e.target.value)} placeholder="" name="campusId"/>
          </div>
          {/* for some reason nothing but adding empty cells aids in aligning this button right*/}
          <p></p><p></p><p></p> 
          <button> ADD </button>
          

        </form> 
      ): ''}

    {/* ----------------- STUDENTS TABLE ---------------- */} 
     <table>
        <tbody>
          {props.allStudents.map((student) => (
            <tr key={student.id}>

              <td>
                <h1><Link to={`/student/${student.id}`}>
                  {student.lastName}, {student.firstName} 
                  </Link> 
                  [#{student.id}] 
                </h1>
              </td>

          {/*---------------- DELETE STUDENT------------  */}
              <td>
                  <Button 
                  variant="contained" color="primary"
                  style={{marginLeft: '10px'}}
                  /* style ={{color: 'indigo', cursor: 'pointer', width: '50'}} */
                  onClick={() => deleteStudent(student.id) }> X </Button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
      {/* --------------- END STUDENTS TABLE -------------- */} 
      

      
      
      

    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;