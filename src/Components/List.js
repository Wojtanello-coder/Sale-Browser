import Item from "./Item";
import axios from "axios";
import { useEffect, useState } from "react";
import data from "./Items.json";
import "./List.css";

const List = () => {
    const [games, setGames] = useState(data);

    const options = {
        method: 'POST',
        //url: , //'https://www.cheapshark.com/api/1.0/deals',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            sortBy: "Price",
            storeID: "5",
            limit: 1,
            metacritic: 90
        }
    };
    // useEffect(() => {
    //     fetch('', options)
    //         .then((response) => {
    //             console.log(response);
    //         })
    //         .catch((error) => {
    //           console.log(error);
    //         });


    //   axios.request(options)
    //     .then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // }, []);
    
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