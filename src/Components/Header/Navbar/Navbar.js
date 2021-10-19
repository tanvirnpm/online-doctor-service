import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import { getAuth, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../../firebase.config";

const Navbar = () => {
  const app = initializeApp(firebaseConfig);
  const [loginUser, setLoginUser] = useContext(UserContext);
  const logOutHandler = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setLoginUser({})
        localStorage.removeItem('loginUser')
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Virtual eClinic
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq">
                Faq
              </Link>
            </li>
          </ul>
          {loginUser.email ? (
            <div className="dropdown">
              <span className="nav-item">{loginUser.name}</span>
              <button
                className="btn btn-warning"
                onClick={() => logOutHandler()}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/sign-in" className="btn btn-warning">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
