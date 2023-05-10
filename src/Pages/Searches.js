import Header from '../Components/Header';
import List from '../Components/List';


const Searches = () => {

    return(
        <div>
            <List url='https://www.cheapshark.com/api/1.0/deals?storeID=1&sortBy=Price&pageSize=5'/>
            {/* Sort by */}
        </div>
    );
}

export default Searches;