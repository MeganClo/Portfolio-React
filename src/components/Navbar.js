import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
    return (
        <>
            <nav className="flex">
                <NavLink
                    to="/"
                    exact
                    activeClassName="text-white"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-blue-800 text-4xl font-bold bold tracking-widest"
                >
                    Megan
            </NavLink>
                <NavLink
                    to="/project"
                    activeClassName="text-blue-100 bg-blue-700"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-blue-800 light">
                    Projects
            </NavLink>
                <NavLink
                    to="/post"
                    activeClassName="text-blue-100 bg-blue-700"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-blue-800 light">
                    Blog Posts
            </NavLink>
                <NavLink
                    to="/about"
                    activeClassName="text-blue-100 bg-blue-700"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-blue-800 light">
                    About Me!
            </NavLink>
            </nav>
            <div className="inline-flex py-3 px-3 my-6">
                <SocialIcon url="https://github.com/MeganClo" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                <SocialIcon url="https://www.linkedin.com/in/megan-close-077b921bb/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
            </div>
        </>
    );
}

export default Navbar;
