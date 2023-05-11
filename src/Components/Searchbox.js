import Sortby from "./Searchbox/Sortby";
import Maxmin from "./Searchbox/Maxmin";
import Checkboxes from "./Searchbox/Checkboxes";
import Ratings from "./Searchbox/Ratings";


const Searchbox = () => {

    return(
        <div className="Searchbox">
            <Sortby></Sortby>
            <Maxmin></Maxmin>
            <Checkboxes></Checkboxes>
            <Ratings></Ratings>
        </div>
    );
}

export default Searchbox;