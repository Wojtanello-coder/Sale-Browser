import { Link } from "react-router-dom";
import Header from "../Components/Header";
import List from "../Components/List";


const Sales = () => {

    return(
        <div >
            <List url='https://www.cheapshark.com/api/1.0/deals?storeID=1&sortBy=Release&steamRating=80&pageSize=3'/>
            <hr/>
            <List url='https://www.cheapshark.com/api/1.0/deals?storeID=1&sortBy=Metacritic&onSale=1&pageSize=3'/>
            <hr/>
            <List url='https://www.cheapshark.com/api/1.0/deals?storeID=1&sortBy=Savings&AAA=1&pageSize=3'/>
            


            
        </div>
    );
}

export default Sales;