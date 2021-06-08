import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex">
            <NavLink 
            to="/" 
            exact 
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-blue-800 text-4xl font-bold bold tracking-widest"
            >
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
