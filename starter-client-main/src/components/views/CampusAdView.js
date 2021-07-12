import { useHistory } from "react-router";
const CampusAdView = (props) => {

    const history = useHistory()
    var {campus} = props;
    return (
        <div className="root">
        <h1> {campus.name} [#{campus.id}] </h1>
        <p>is updated!</p>

        {history.push(`/campus/${campus.id}`)}
        </div>
    );
}
export default CampusAdView;