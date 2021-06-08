import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/" exact>
                Megan
            </NavLink>
            <NavLink to="/project">
                Projects
            </NavLink>
            <NavLink to="/post">
                Blog Posts
            </NavLink>
            <NavLink to="/about">
                About Me! 
            </NavLink>
        </nav>
    );
}

export default Navbar;
