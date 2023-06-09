import React, { useContext } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Component/AuthProvider/Authprovider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().then().catch();
  };
  return (
    <div className="navbar sticky top-0 z-10 bg-[#050931] md:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="text-white font-semibold menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
             <li>
            <Link className="text-black" to="/">Home</Link>
          </li>
          <li tabIndex={0}>
            <Link className="text-black" to="/alltoy">All Toys</Link>
          </li>

          {user ? (
            <>
              <li>
                <Link className="text-black" to="/mytoys">My Toys</Link>
              </li>
            </>
          ) : (
            <></>
          )}

          <li>
            <Link className="text-black" to="blog">Blog</Link>
          </li>
          {
            user?<></>:<>
            <li>
            <Link className="text-black" to="registration">Sign Up</Link>
          </li>
            </>
          }
          {user ? (
            <>
              <li>
                <Link className="text-black" to="/addtoy">Add Toy</Link>
              </li>
            </>
          ) : (
            <></>
          )}
          </ul>
        </div>
        <div>
          <img className="h-12" src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="text-white font-semibold menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li tabIndex={0}>
            <Link to="/alltoy">All Toys</Link>
          </li>

          {user ? (
            <>
              <li>
                <Link to="/mytoys">My Toys</Link>
              </li>
            </>
          ) : (
            <></>
          )}

          <li>
            <Link to="blog">Blog</Link>
          </li>
          {
            user?<></>:<>
            <li>
            <Link to="registration">Sign Up</Link>
          </li>
            </>
          }
          {user ? (
            <>
              <li>
                <Link to="/addtoy">Add Toy</Link>
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <Link
              onClick={handleLogout}
              className="btn bg-white text-black px-6 py-2"
            >
              Logout
            </Link>
            <div className="ms-4">
              <img
                title={user.displayName}
                className="rounded-full  h-12 w-12  border-4 border-white"
                src={user.photoURL}
                alt=""
              />
            </div>
          </>
        ) : (
          <>
            <Link className="btn  bg-white text-black" to="/login">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
