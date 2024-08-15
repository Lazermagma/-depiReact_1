import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
const NavBar = () => {
  return (
    <>
      <div className="navbar navbar-expand-sm  bg-dark   ">
        <div className="navbar-brand ">
          <Link className="nav-link text-white p-3" href="/">
            SchoolLogo
          </Link>
        </div>

        <div className="container-fluid d-flex justify-content-center  ">
          <ul className="navbar-nav gap-5  ">
            <li className="nav-item ">
              <Link href="/School" className="nav-link text-white">
                School
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/About-us" className="nav-link text-white">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Contact-us" className="nav-link text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="btn btn-warning m-3">
          <Link href="/Login" className="nav-link text-white  ">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
