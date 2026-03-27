import { Route,Routes, Link } from "react-router-dom";
import Home from "../pages/Home";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/search">Search</Link> |{" "}
      <Link to="/favorites">Favorites</Link>
    </nav>
  );
}

export default Navbar;