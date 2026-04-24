import React from "react";
import Width from "../FixedWidth/Width";
import { Link, NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  let navigate = useNavigate();
  const { user, logOut, loading } = useAuth();
  // console.log(user.photoURL);

  const handleAppointmentPage = () => {
    if (user) {
      navigate("/appointment");
    } else {
      toast.error("Please Login", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/auth/login");
    }
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Log Out Successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something Went Wrong");
      });
  };

  if (loading) {
    return <span>Loading...</span>;
  }

  return (
    <Width>
      <div className="navbar shadow-sm text-white py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink className="text-[16px]">Home</NavLink>
              </li>
              <li>
                <NavLink className="text-[16px]">About Us</NavLink>
              </li>
              <li>
                <NavLink className="text-[16px]">Services</NavLink>
              </li>
              <li>
                <NavLink className="text-[16px]">Blog</NavLink>
              </li>
              <li>
                <NavLink className="text-[16px]">Contact Us</NavLink>
              </li>
              <li>
                <Link
                  to="/appointment"
                  className="group relative btn btn-sm rounded-2xl border-2 border-secondary bg-transparent text-secondary text-xl py-5"
                >
                  <span className="relative rounded-2xl z-10 group-hover:text-secondary transition duration-300">
                    Appointment
                  </span>
                  <span className="absolute rounded-2xl left-0 top-0 h-full w-0 bg-[#fff7f4] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>
          <Link className="font-bold text-2xl">
            Medi<span className="text-secondary">Help</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="services">Services</NavLink>
            </li>
            <li>
              <NavLink to="blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="contact-us">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end max-xl:hidden">
          <button
            onClick={handleAppointmentPage}
            to="/appointment"
            className="group relative btn rounded-2xl border-2 border-secondary bg-transparent text-secondary text-2xl py-5"
          >
            <span className="relative rounded-2xl z-10 group-hover:text-secondary transition duration-300">
              Appointment
            </span>
            <span className="absolute rounded-2xl left-0 top-0 h-full w-0 bg-[#fff7f4] transition-all duration-300 group-hover:w-full"></span>
          </button>
          {user && (
            <div className="ml-2 bg-primary text-white">
              <div className="dropdown dropdown-end bg-primary">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex="-1"
                  className="bg-primary menu menu-sm dropdown-content border-2 border-secondary rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li className="hover:text-secondary">
                    <a className="justify-between">Profile</a>
                  </li>

                  <li className="hover:text-secondary" onClick={handleLogOut}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </Width>
  );
};

export default Navbar;
