import Item from "./Item";
import axios from "axios";
import { useEffect, useState } from "react";
import data from "./Items.json";
import "./List.css";

const List = () => {
    const [games, setGames] = useState(data);

    const options = {
        method: 'GET',
        url: '172.24.16.1/data', //'https://www.cheapshark.com/api/1.0/deals',
        data: {
            // sortBy: "Price",
            // storeID: "5",
            // limit: 1,
            // metacritic: 90
        },
        headers: {
        }
    };
    useEffect(() => {
      axios.request(options)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);
    
    console.log(games);
    return(
        <div>
            <div className="list">
                {games.map((game, index) => (

                    <Item className="item" key={index} data={game}/>
                ))}
            </div>
        </div>
    );
}

export default List;