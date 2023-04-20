import { Link } from "react-router-dom";


const Header = () => {

    return(
        <div>
            <div>
                <Link to="/">Home</Link> 
                <Link to="/search">Search</Link> 
                <Link to="/wishlist">Wishlist</Link>
            </div>
        </div>
    );
}

export default Header;