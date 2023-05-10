import { Link } from "react-router-dom";
import Header from "../Components/Header";


const Sales = () => {

    return(
        <div >
            <List url='https://www.cheapshark.com/api/1.0/deals?storeID=1&sortBy=Price&pageSize=5'/>
            <List url='https://www.cheapshark.com/api/1.0/deals?storeID=1&sortBy=Price&pageSize=5'/>
            <List url='https://www.cheapshark.com/api/1.0/deals?storeID=1&sortBy=Price&pageSize=5'/>
            


            
        </div>
    );
}

export default Sales;