import {useState} from 'react'
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';
const CampusView = (props) => {
  const history = useHistory()
  const {campus, editCampus} = props;
  const [showEdit, setShowEdit] = useState (false)

/*EDIT CAMPUS FORM STATE DEFINITIONS*/
  var [id] = useState(campus.id)
  var [imageUrl, setImageUrl] = useState(campus.imageUrl)
  var [name, setName] = useState(campus.name)
  var [address, setAddress] = useState(campus.address)
  var [description, setDescription] = useState(campus.description)
  var [students, setStudents] = useState(campus.students)
  
  //dispatch editStudent
  async function updateCampus(e){
    e.preventDefault()

    const updateCampus = {id, name, imageUrl, address, description, students}
    await editCampus(updateCampus) 
  
    history.push(`${campus.id}/ad`)
  } 

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

{/* ----------------- BODY ---------------- */} 
{/* ----------------- show edit form OR body ---------------- */}       
  {showEdit ? (
      <div>
      <form onSubmit={(e) => updateCampus(e)}>
      <img src={campus.imageUrl} height="200" alt="Campus"/>
      <table> <tbody>
        <tr>
        <td><label>Image Url</label></td>
        <td ><input type="text" defaultValue={campus.imageUrl} onChange ={(e) => setImageUrl(e.target.value)} placeholder={campus.imageUrl} name="imageUrl"/></td>
        </tr>

        <tr>
        <td><label> Name</label></td>
        <td><input type="text" defaultValue={campus.name} onChange ={(e) => setName(e.target.value)} placeholder={campus.name} name="campusName"/></td>     
        </tr>

        <tr>
        <td><label>Address</label></td>
        <td><input type="text" defaultValue={campus.address} onChange ={(e) => setAddress(e.target.value)} placeholder={campus.address} name="campuAddress"/></td>
        </tr>

        <tr>
        <td><label>Description</label></td>
        <td><input type="text" defaultValue={campus.description} onChange ={(e) => setDescription(e.target.value)} placeholder={campus.description} name="campusDescription"/></td>
        </tr>

        <tr>
        <td><label>Add Student</label></td>
        <td><input type="text"  onChange ={(e) => setStudents(...students, e.target.value)} placeholder="Student Id" name="studentId"/></td>     
        </tr>
        </tbody></table>
        <button>UPDATE</button>

        </form>
        </div>


    ) : (
      
      <div>
      <img src={campus.imageUrl} width="200" alt="Campus"/>      
      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <p>{campus.description}</p>

      <ul>
      { !campus.students.length ? 
          "No students are enrolled at this time" :
          campus.students.map(  student => {
            let name = student.firstName + " " + student.lastName;
              return (<li> <Link to={`/student/${student.id}`}>{name}</Link> </li> );
          })
      }
      </ul>
      </div>
    ) 
  } 
      
    </div>
  );
};


export default CampusView;