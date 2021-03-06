import {useState} from 'react'
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';

const StudentView = (props) => {
  const history = useHistory()
  var {student, editStudent} = props;
  var [showEdit, setShowEdit] = useState (false)

/*EDIT STUDENT FORM STATE DEFINITIONS*/
   var [id] = useState(student.id) 
  var [firstName, setFirstName] = useState(student.firstName)
  var [lastName, setLastName] = useState(student.lastName)
  var [email, setEmail] = useState(student.email)
  var [imageUrl, setImageUrl] = useState(student.imageUrl)
  var [gpa, setGpa] = useState(student.gpa)
  var [campusId, setCampusId] = useState(student.campus? student.campus.id : 0) 

  /*dispatch editStudent based on form input
  that was initially passed as page state*/
  async function updateStudent(e){
    e.preventDefault()
    const updatedStudent = {id, firstName, lastName, email, imageUrl, gpa, campusId}
    await editStudent(updatedStudent) 

    history.push(`${student.id}/ad`)
  } 
 
    
  
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

{/* ----------------- BODY ---------------- */} 
{/* ----------------- show edit form OR body ---------------- */} 
  <div clssName = "margin">
    {showEdit ? (
      <form onSubmit={(e) => updateStudent(e)}>
      <img src={student.imageUrl} height="200" alt="Student"/>
      <table> <tbody>
        <tr>
        <td><label>Image Url</label></td>
        <td ><input type="text" defaultValue={student.imageUrl} onChange ={(e) => setImageUrl(e.target.value)} placeholder={student.imageUrl} name="imageUrl"/></td>
        </tr>

        <tr>
        <td><label>Full Name</label></td>
        <td><input required type="text" defaultValue={student.firstName} onChange ={(e) => setFirstName(e.target.value)} placeholder={student.firstName} name="firstName"/></td>     
        <td><input required type="text" defaultValue={student.lastName} onChange ={(e) => setLastName(e.target.value)} placeholder={student.lastName} name="lastName"/></td>
        </tr>
        
        <tr>
        <td><label>Campus</label></td>
        <td>{student.campusId ? <Link to={`/campus/${student.campusId}`}> {student.campus.name} </Link> : "N/A" }</td>
        <td><input type="text" defaultValue={student.campusId} onChange ={(e) => setCampusId(e.target.value)} placeholder={student.campusId} name="campusId"/></td>     
        </tr>

        <tr>
        <td><label>Email</label></td>
        <td><input required type="text" defaultValue={student.email} onChange ={(e) => setEmail(e.target.value)} placeholder={student.email} name="imageUrl"/></td>
        </tr>

        <tr>
        <td><label>GPA</label></td>
        <td><input type="number" defaultValue={student.gpa} onChange ={(e) => setGpa(e.target.value)} placeholder={student.gpa} name="gpa"/></td>
        </tr>
        </tbody></table>
        <button>UPDATE</button>

        </form>
    ) : (

      <div>
        <img src={student.imageUrl} height="200" alt="Student"/> 
        <h1>{student.firstName} {student.lastName} [#{student.id}]</h1>
        <p>Campus: {student.campusId ? <Link to={`/campus/${student.campusId}`}> {student.campus.name} </Link> : "Student is not currently enrolled" } </p>
        <p>Email: {student.email}</p>
        <p>GPA: {student.gpa}</p>
      </div>
    ) 
    } 
      
    </div>
    </div>
  );


};

export default StudentView;