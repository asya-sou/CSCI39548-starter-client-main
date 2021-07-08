import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { addCampusThunk } from "../../store/thunks";
import {useDispatch} from 'react-redux'
import {useState} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const AllCampusesView = (props) => {
  const dispatch = useDispatch()

  /*-------------------ADD CAMPUS FORM SET-UP ------------------------ */
  const [showForm, setShowForm] = useState (false)
  
  /*ADD CAMPUS FORM STATE DEFINITIONS*/
  var [name, setName] = useState ()
  var [address, setAddress] = useState ()
  var [description, setDescription] = useState ()
  var [imageUrl, setImageUrl] = useState ()
  var [studentId, setStudentId] = useState ()

  /*dispatch addSTudentsThunk based on form input
  that was initially passed as page state*/
  function addNewCampus(){
    const newCampus = {name, address, description, imageUrl, studentId}
    dispatch(addCampusThunk(newCampus))
  }

      /*-------------------ADD CAMPUS FORM SET-UP ------------------------ */

  const {allCampuses, deleteCampus} = props;

  if (!allCampuses.length) {
    return <div>There are no campuses.</div>;
  }
/* const handleDelete = (e) => {
   this.props.deleteCamp(e);
  } */


  return (
    <div className="root">
    {/* ----------------- NAV BAR ---------------- */} 
    <AppBar position="static" elevation={0} className="appBar">
      <Toolbar className="appBar">
        <Typography variant="h6" className="navTitle" >
          All Campuses
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

        {/* if showForm false - show ADD CAMPUS, else - HIDE FORM */}
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
          ADD CAMPUS
        </Button> 
        )}
      </Toolbar>
    </AppBar>

{/* ----------------- ADD STUDENTS FORM ---------------- */} 
      {/* if ADD STUDENT button pressed - shows form below, else shows nothing */}
      {showForm ? (
        <form onSubmit={() => addNewCampus()}>
          <div className='row'>
          <label>Name<strong></strong> </label> 
          <input type="text" value={name} onChange={(e) =>setName(e.target.value)} placeholder="Required" name="name"/>
                    
          <label>Address</label> 
          <input type="text" value={address} onChange={(e) =>setAddress(e.target.value)} placeholder="Required" name="address"/>
          </div>

          <div className='row'>
          <label>Description</label> 
          <input type="text" value={description} onChange={(e) =>setDescription(e.target.value)} placeholder="" name="description"/>

          <label>Photo URL </label> 
          <input type="text" value={imageUrl} onChange={(e) =>setImageUrl(e.target.value)} placeholder="" name="imageUrl"/>
          </div>

          <div className='row'>
          <p></p><p></p>
          <label> Students </label> 
          <input type="number" value={studentId} onChange={(e) => setStudentId(e.target.value)} placeholder="" name="gpa"/>

          </div>
          {/* for some reason nothing but adding empty cells aids in aligning this button right*/}
          <p></p><p></p><p></p> 
          <button> ADD </button>
          

        </form> 
      ): ''}

    {/* ----------------- CAMPUS TABLE ---------------- */} 

    <table>
    <tbody>
      {props.allCampuses.map((campus) => (
        <tr key={campus.id}>
            <td><img src={campus.imageUrl} width="150" alt="Campus"/></td>
            
            <td><Link to={`/campus/${campus.id}`}> <h1>{campus.name}</h1>  </Link> 
            <p>Campus ID: {campus.id}</p>
            </td>
            
        {/* DELETE CAMPUS  */}
        <td>
                  <Button 
                  variant="contained" color="primary"
                  style={{marginLeft: '10px'}}
                  onClick={() => deleteCampus(campus.id) }> X </Button>
              </td>

        </tr>        
      ))}
      </tbody>
      </table>
      </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;