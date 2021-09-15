import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li className="nav-home">
          {" "}
          <Link to="/">Home</Link>
        </li>

        <ul className="nav-details">
          <li className="nav-item">
            <Link to="/watched">Watched</Link>
          </li>
          <li className="nav-item">
            <Link to="/plantowatch">Plan To Watch</Link>
          </li>
          <li className="nav-item">
            <Link to="/browse">Browse Movies</Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
