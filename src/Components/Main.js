import List from "./List";
import data from "../Components/Items.json";
import "./Main.css"

const Main = () => {

    return(
        <div className="main">
            <div className="grid">
                <div className="first">
                    <h1>New on Sale</h1>
                    <List url='https://www.cheapshark.com/api/1.0/deals?storeID=1&sortBy=Release&steamRating=80&pageSize=6' data={data.first} type="image"/>
                </div>
                <div className="second">
                    <h1>Discount Classics</h1>
                    <List url='https://www.cheapshark.com/api/1.0/deals?storeID=1&sortBy=Metacritic&onSale=1&pageSize=6' data={data.second} type="image"/>
                </div>
                <div className="third">
                    <h1>Cheap Goodies</h1>
                    <List url='https://www.cheapshark.com/api/1.0/deals?storeID=1&sortBy=Savings&AAA=1&pageSize=6' data={data.third} type="image"/>
                </div>
            </div>
        </div>
    );
}

export default Main;