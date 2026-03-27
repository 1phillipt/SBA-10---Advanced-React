import { Route,Routes, Link } from "react-router-dom";
import Home from "../pages/Home";

function Navbar(){
    return (
        <nav>
            <h2>Recipe App</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/favorites">Favorites</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;