// import React from 'react'
import { Navbar } from "flowbite-react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlicer";

const NavbarPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const handleLogout = () => {
      dispatch(logout());
      dispatch(reset());
      navigate("/");
    };
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="">
        {/* <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          FrodenZ Labs
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      {user ? (
        <Navbar.Collapse>
          <Navbar.Link href="/dashboard" active>
            Dashboard
          </Navbar.Link>
          <Navbar.Link href="#">Settings</Navbar.Link>
          <Navbar.Link href="/" onClick={handleLogout}>Logout</Navbar.Link>
        </Navbar.Collapse>
      ) : (
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      )}
    </Navbar>
  );
}

export default NavbarPage