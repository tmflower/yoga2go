// TODO: Build Navbar component with NavLinks for each route
import { NavLink } from "react-router-dom"

export function Navbar() {
    return (
        <>
            <NavLink exact="true" to="/" end>Home</NavLink>
            <NavLink exact="true" to="/poses" end>Poses</NavLink>
            <NavLink exact="true" to="/categories" end>Categories</NavLink>
            <NavLink exact="true" to="/about" end>About</NavLink>
        </>        
    )
}