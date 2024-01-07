import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6"

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        {
            path: '/',
            title: "Start a Search"
        },
        {
            path: '/my-job',
            title: "My Jobs"
        },
        {
            path: '/salary',
            title: "Salary Estimate"
        },
        {
            path: '/post-job',
            title: "Post a Job"
        }
    ];

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="max-w-screen-2x1 conatiner mx-auto x1:px-24 px-4">
            <nav className="flex justify-between item-center py-6">
                <a href="/" className="flex items-center gap-2 text-2xl text-black">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="30"
                        viewBox="0 0 29 30"
                        fill="none" >
                        <circle
                            cx="12.0143"
                            cy="12.5143"
                            r="12.0143"
                            fill="#3575E2"
                            fillOpacity="0.4"
                        />
                        <circle
                            cx="16.0143"
                            cy="17.4857"
                            r="12.0143"
                            fill="#3575E2"
                        />
                    </svg>{" "}
                    <span>Job Portal</span>
                </a>
                <ul className="hidden md:flex gap-12">
                    {navItems.map(({ path, title }) => (
                        <li key={path} className="text-base text-primary">
                            <NavLink
                                to={path}
                                className={({ isActive }) => isActive ? "active" : ""}
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                {/* signup and login Button */}
                <div className="text-base text-black font-medium space-x-5 hidden lg:block">
                    <Link to="/login" className="py-2 px-5  border rounded">Log In</Link>
                    <Link to="/signup" className="py-2 px-5  border rounded bg-blue-400 text-white">Sign Up</Link>
                </div>

                {/* mobile menu  */}
                <div className="md:hidden block">
                    <button onClick={handleMenuToggle}>
                        {
                            isMenuOpen ? <FaXmark className="w-5 h-5  text-black" /> : <FaBarsStaggered className="w-5 h-5  text-black" />
                        }
                    </button>
                </div>

            </nav>

            {/** Nav BAr for mobile */}
            <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
                <ul>
                    {navItems.map(({ path, title }) => (
                        <li key={path} className="text-base text-white first:text-white py-1">
                            <NavLink
                                to={path}
                                className={({ isActive }) => isActive ? "active" : ""}
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))}

                    <li className="text-white py-1"> <Link to="/login">Log In</Link></li>
                </ul>

            </div>
        </header>
    );
}

export default Navbar;
