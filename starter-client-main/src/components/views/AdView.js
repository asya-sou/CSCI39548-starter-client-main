import { Redirect } from "react-router";
import { useHistory } from "react-router";
const AdView = (props) => {

    const history = useHistory()
    var {student} = props;
    return (
        <div>
        <p> {student.firstName} {student.lastName} [#{student.id}] is updated!</p>
        
        {history.push(`/student/${student.id}`)}
        </div>
    );
}
export default AdView;