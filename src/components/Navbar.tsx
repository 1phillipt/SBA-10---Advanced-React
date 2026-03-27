import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-title">Recipe App</span>
      <div className="navbar-links">
        <Link className="navbar-link" to="/">Home</Link>
        <Link className="navbar-link" to="/search">Search</Link>
        <Link className="navbar-link" to="/favorites">Favorites</Link>
      </div>
    </nav>
  );
}


export default Navbar;