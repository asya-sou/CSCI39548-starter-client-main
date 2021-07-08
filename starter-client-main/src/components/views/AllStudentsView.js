import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { VscError } from "react-icons/vsc";
import {useDispatch} from 'react-redux'
import { deleteStudentThunk } from "../../store/thunks";
import { addStudentThunk } from "../../store/thunks";
import {useState} from 'react'

const AllStudentsView = (props) => {
  const dispatch = useDispatch()
  const [showForm, setShowForm] = useState (false)
  
  var [firstName, setFirstName] = useState ('')
  var [lastName, setLastName] = useState ('')
  var [email, setEmail] = useState ('')
  var [imageUrl, setImageUrl] = useState ('https://img.etimg.com/thumb/msid-80095660,width-650,imgsize-601228,,resizemode-4,quality-100/elon-musk-is-the-worlds-second-richest-person-with-an-estimated-net-worth-of-158-billion-.jpg')
  var [gpa, setGpa] = useState (0.0)

  function addNewStudent(){
/*   e.preventDefault()
 */  
const newStudent = {firstName, lastName, email, imageUrl, gpa}
  dispatch(addStudentThunk(newStudent))
}

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

            
      <Button 
        variant="contained" color="primary" style={{marginRight: '10px'}}
        onClick={ () => {setShowForm(!showForm)} }>
        ADD STUDENT
      </Button>
    
      <form onSubmit={() => addNewStudent()}>
              
                  <label>First Name </label> 
                  <input type="text" value={firstName} onChange={(e) =>setFirstName(e.target.value)} placeholder="First Name" name="firstName"/>
                  
                  <label>Last Name </label> 
                  <input type="text" value={lastName} onChange={(e) =>setLastName(e.target.value)} placeholder="Last Name" name="lastName"/>

                  <label>Email </label> 
                  <input type="text" value={email} onChange={(e) =>setEmail(e.target.value)} placeholder="Last Name" name="lastName"/>
                <button>Add Transaction</button>
              </form>

    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;