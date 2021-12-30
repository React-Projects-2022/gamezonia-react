import ToggleMenu from "./ToggleMenu";
import { Link } from "react-router-dom";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <div className="container-fluid">
      <ToggleMenu />
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Link
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
