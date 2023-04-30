import { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./NavbarStylesheet.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [state, setState] = useState({ clicked: false });
  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };

  return (
    <nav className="NavbarItems">
      <h1 className="logo">Visit Nepal 2023</h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
};

export default Navbar;
