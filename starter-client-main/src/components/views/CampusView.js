import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const CampusView = (props) => {
  const {campus} = props;
/*   if (!campus.students.length) {
    return (<p>No students are enrolled at this time</p>);
  } */

  return (
    <div>
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
      <Link to={'/'} >
            <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              HOME
            </Button>
      </Link> 
      <Link to={'/campuses'} >
            <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              ALL CAMPUSES
            </Button>
      </Link> 
    </div>
  );

};

export default CampusView;