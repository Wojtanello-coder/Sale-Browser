import Header from '../Components/Header';
import List from '../Components/List';
import data from "../Components/Items.json";


const Searches = () => {

    return(
        <div>
            <List url='https://www.cheapshark.com/api/1.0/deals?storeID=1&sortBy=Price&pageSize=5' data={data.search} type="detail"/>
            {/* Sort by */}
        </div>
    );
}

export default Searches;