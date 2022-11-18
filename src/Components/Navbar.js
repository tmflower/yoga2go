// TODO: Build Navbar component with NavLinks for each route
import { NavLink } from "react-router-dom"

export function Navbar() {
    return (
        <>
            <NavLink exact="true" to="/" end>Home</NavLink>
            <NavLink exact="true" to="/explore" end>Explore</NavLink>
            <NavLink exact="true" to="/about" end>About</NavLink>
            <NavLink exact="true" to="/dev" end>Dev</NavLink>
        </>
    )
}
