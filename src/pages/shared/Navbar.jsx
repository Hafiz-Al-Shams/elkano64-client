import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import AuthContext from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";



const Navbar = () => {




    const { user, signOutUser } = useContext(AuthContext);

    // console.log(user?.email);
    // const navigate = useNavigate();

    const [profilePhoto, setProfilePhoto] = useState('');
    const [userName, setUserName] = useState('');

    useEffect(() => {
        if (user) {
            setProfilePhoto(user.photoURL);
            setUserName(user.displayName);
        }
    }, [user]);


    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                // console.log('user signOut successful');
                Swal.fire({
                    position: "center",
                    icon: 'warning',
                    title: 'Log out done!',
                    showConfirmButton: false,
                    timer: 2000

                    // confirmButtonText: 'ok'
                });
                // setProfilePhoto('');
                // setUserName('');
            })
            .catch(error => console.log('ERROR', error.message))
    }


    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/all-foods">All Foods</NavLink></li>
        <li><NavLink to="/gallery">Gallery</NavLink></li>
    </>

    const links2 = <>
        <li><NavLink to={`/my-foods/${user?.email}`}>My Foods</NavLink></li>
        <li><NavLink to="/add-food">Add food</NavLink></li>
        <li><NavLink to="/my-orders">My Orders</NavLink></li>
    </>


    const [theme, setTheme] = useState("light");

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };


    return (
        <>
            <div className="sticky top-0 z-10 navbar font-medium py-3 px-10 bg-base-300 text-base-content">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="text-2xl font-bold">Elkano64</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4 font-semibold">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-8">


                    <div className="">
                        <select
                            className="select select-bordered w-24 text-xs"
                            value={theme}
                            onChange={(e) => handleThemeChange(e.target.value)}
                        >
                            <option value="light" >Light</option>
                            <option value="dark">Dark</option>
                            <option value="dim">Dim</option>
                            <option value="luxury">Luxury</option>
                        </select>
                    </div>


                    {
                        user ?
                            <>
                                <div className="flex justify-center items-center gap-3">

                                    {/* <p className="text-sm font-bold text-center text-gray-800">Current <br />User</p>
                                    <p className="text-lg font-bold">{userName}</p> */}

                                    {/* <div><img data-tooltip-id="my-tooltip"
                                        data-tooltip-content={userName}
                                        data-tooltip-place="bottom-end" className="w-11 rounded-full cursor-pointer" src={profilePhoto} alt="photo" /></div> */}



                                    <div className="dropdown dropdown-left">
                                        <div tabIndex={0} role="button" className="btn bg-transparent rounded-full">
                                            <img className="w-11 rounded-full cursor-pointer" src={profilePhoto} alt="photo" />
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow space-y-2">
                                            {links2}
                                        </ul>
                                    </div>
                                    <div><a onClick={handleLogOut} data-tooltip-id="my-tooltip"
                                        data-tooltip-content={userName}
                                        data-tooltip-place="bottom-start" className="btn bg-neutral-400/40 text-base-content">Log Out</a></div>
                                </div>
                            </>
                            :
                            <>
                                <NavLink to="/signIn"><button className="btn bg-neutral-400/40 text-base-content">Login</button></NavLink>
                            </>
                    }
                    <Tooltip id="my-tooltip" />
                </div>
            </div>
        </>
    );
};

export default Navbar;