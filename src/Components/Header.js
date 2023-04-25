import { Link } from "react-router-dom";
import "./Header.css";


const Header = () => {

    return(
        <div className="Header">
            <div className="Navigation">
                <Link to="/">Home</Link> 
                <Link to="/search">Search</Link> 
                <Link to="/wishlist">Wishlist</Link>
            </div>
            <div className="Logo">LOGO</div>
        </div>
    );
}

export default Header;