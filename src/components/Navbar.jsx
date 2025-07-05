import {Link} from "react-router-dom";
import "./Navbar.css";
function Navbar(){
    return(
        <header className="navbar">
                 <div className="navbar_logo">Little Lemon</div>
                 <nav>
                     <Link to="/">Home</Link>
                     <Link to="/about">About</Link>
                     <Link to="/menu">Menu</Link>
                     <Link to="/booking">Reservation</Link>
                     <Link to="/order">Order</Link>
                     <Link to="/login">Login</Link>
                 </nav>
        </header>
    );
}
export default Navbar;