import { NavLink } from "react-router-dom";
import "./NavBar.css";

export function Navbar() {
    return (
        <nav className="navbar">
            <NavLink exact="true" to="/" className="nav-logo">Yoga2Go</NavLink>
            <ul className="nav-menu">
                <li className="nav-item">
                <NavLink exact="true" to="/" className="nav-links">Home</NavLink>                
                </li>
                <li className="nav-item">
                <NavLink exact="true" to="/explore" className="nav-links">Explore</NavLink>
                </li>
                <li className="nav-item">
                <NavLink exact="true" to="/about" className="nav-links">About</NavLink>
                </li>
            </ul>           
        </nav>
    )
}
