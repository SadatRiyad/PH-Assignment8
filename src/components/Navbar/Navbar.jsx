import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import '../Navbar/Navbar.css'

const Navbar = () => {
    const Links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/listedBooks">Listed Books</NavLink></li>
        <li><NavLink to="/pagesToRead">Pages to Read</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contactUs">Contact Us</NavLink></li>
    </>

    return (
        <div>
            {/* <!-- navbar start --> */}
            <nav className="top-0 z-10">
                <div className="justify-center items-center">
                    <div className="navbar bg-base-100">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden -ml-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                </div>
                                <ul tabIndex="0"
                                    className="menu menu-sm dropdown-content mt-3 md:mt-0 z-[10000] p-0 md:p-0 shadow bg-base-100 rounded-box w-52 font-medium">
                                    {Links}
                                </ul>
                            </div>
                            <a className="-ml-4 md:ml-0 w-48" href="/"><img src={logo}></img></a>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal md:mr-4 text-base font-medium">
                                {Links}
                            </ul>
                        </div>
                        <div className="navbar-end gap-1 md:gap-2">

                            <a href="#"><button className="btn bg-green hover:bg-transparent border-green text-white hover:text-green rounded hover:border-green  hover:-translate-y-1 transition-all duration-200">Sign In</button></a>
                            <a href="#"><button className="btn bg-[#59C6D2] hover:bg-transparent border-[#59C6D2] text-white hover:text-[#59C6D2] hover:border-[#7cb1b7] rounded hover:-translate-y-1 transition-all duration-200">Sign Up</button></a>

                        </div>
                    </div>
                </div>
            </nav>
            {/* <!-- navbar end --> */}
        </div>
    );
};

export default Navbar;