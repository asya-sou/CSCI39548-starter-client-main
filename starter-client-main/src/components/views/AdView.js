import { Redirect } from "react-router";
import { useHistory } from "react-router";
const AdView = (props) => {

    const history = useHistory()
    var {student} = props;
    return (
        <div>
        <h1> {student.firstName} {student.lastName} [#{student.id}] </h1>
        <p>is updated!</p>

        {history.push(`/student/${student.id}`)}
        </div>
    );
}
export default AdView;