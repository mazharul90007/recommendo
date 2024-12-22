import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";


const Navbar = () => {

    const { user, logout } = useContext(authContext);
    const handleLogOut = () => {
        logout()
            .then(() => {

            })
            .catch(error => {
                console.log(error);
            })
    }

    const links = <>
        <NavLink to={'/'}><li>Home</li></NavLink>
        <NavLink to={'/queries'}><li>Queries</li></NavLink>
        {
            user?.email && <>
                <NavLink to={'/recommendationForMe'}><li>Recommendation For Me</li></NavLink>
                <NavLink to={'/myQueries'}><li>My Queries</li></NavLink>
                <NavLink to={'/myRecommendation'}><li>My Recommendation</li></NavLink>
            </>
        }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to={'/'}><button className="btn btn-ghost text-2xl">Recommendo</button></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu flex gap-3 menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end ">
                {
                    user ? <div className="flex gap-4 items-center">
                        <img src={user.photoURL}
                            className="w-16 h-16 p-2 border-2 border-red-500 shadow-lg rounded-full"
                            alt="" />
                        <button onClick={handleLogOut} className="btn">LogOut</button>
                    </div>
                        :
                        <div className="flex gap-4 items-center">
                            <Link to={'/registration'}><button className="underline">Register</button></Link>
                            <Link to={'/signin'}><button className="btn btn-primary">Sign in</button></Link>
                        </div>
                }

            </div>
        </div>
    );
};

export default Navbar;