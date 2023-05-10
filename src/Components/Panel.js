import Item from "./Item";
import axios from "axios";
import { useEffect, useState } from "react";
import data from "./Items.json";
import "./List.css";

const Panel = (props) => {
    const [games, setGames] = useState(data); // data is DEBUG, original was []

    let config = {
        method: 'get',
    maxBodyLength: Infinity,
        url: props.url,
        headers: { }
    };

    // useEffect(() => {
    //     axios(config)
    //     .then(function (response) {
    //         setGames(response.data);
    //         console.log(response.data);
    //     })
    //     .catch(function (error) {
    //         setGames(data);
    //         console.log(error);
    //     });
    // }, []);
    
    console.log(games);
    return(
        <div>
            <div className="panel">
                {games.map((game, index) => (
                    <Item className="item" key={index} data={game}/>
                ))}
            </div>
        </div>
    );
}

export default Panel;