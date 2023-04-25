import "./Item.css"

const Item = (props) => {
    

    return(
        <div className="Item">
            <div className="Content">
                <h2 className="title">{props.data.title}</h2>
                <hr/>
                <p>Steam - {props.data.steamRatingPercent}%, {props.data.steamRatingText}</p>
                <p>Metacritic - {props.data.metacriticScore}</p>
                <div className=""></div>
            </div>
            <img className="img" src={props.data.thumb}/>
            <div className="priceTag">
                <h3 className="sale">${props.data.salePrice}</h3>
                <h6 className="normal">${props.data.normalPrice} </h6>
            </div>
        </div>
    );
}

export default Item;