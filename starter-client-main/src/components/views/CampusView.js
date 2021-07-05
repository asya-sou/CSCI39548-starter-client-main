import { Link } from "react-router-dom";


const CampusView = (props) => {
  const {campus} = props;
/*   if (!campus.students.length) {
    return (<p>No students are enrolled at this time</p>);
  } */

  return (
    <div>
      <img src={campus.imageUrl} alt="Campus"/>      
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