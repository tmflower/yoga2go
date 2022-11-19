import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from './Images/Yoga2Go-logo.png';

export function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () =>setClick(!click);
    return (
      <>
      <nav className="navbar">
          <NavLink exact="true" to="/" className="nav-logo"><img src={logo} alt="logo"></img></NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
              <NavLink exact="true" to="/" activeClassName="active" className="nav-links" onClick={handleClick}>Home</NavLink>                
              </li>
              <li className="nav-item">
              <NavLink exact="true" to="/explore" activeClassName="active" className="nav-links" onClick={handleClick}>Explore</NavLink>
              </li>
              <li className="nav-item">
              <NavLink exact="true" to="/about" activeClassName="active" className="nav-links" onClick={handleClick}>About</NavLink>
              </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times":"fas fa-bars"}></i>
          </div>           
      </nav> </>
  );
}
