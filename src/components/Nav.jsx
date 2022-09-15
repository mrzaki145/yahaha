import { NavLink } from "react-router-dom";
import { useToggler } from "../hooks";
import Icon from "./common/Icon";
import { logo, logoIcon } from "../data/images";

function Nav() {
  const [isOpen, toggleVal] = useToggler(false);

  return (
    <nav className="nav">
      <div className="container">
        <div className="logo-box">
          <button className="nav__toggler" onClick={toggleVal}>
            <Icon name={isOpen ? "close" : "menu"} />
          </button>

          <NavLink to="/" className="logo" aria-label="logo">
            <img src={logo} alt="" />
            <img src={logoIcon} alt="" />
          </NavLink>
        </div>

        <ul className={`nav__list ${isOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/">Play</NavLink>
          </li>
          <li>
            <NavLink to="/create">Create</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/download">Download</NavLink>
          </li>
        </ul>

        <NavLink className="btn" to="/signin">
          Sign In
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
