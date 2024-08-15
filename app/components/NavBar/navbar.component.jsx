import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
const NavBar = () => {
  return (
    <>
      <div className="navbar navbar-expand-lg container-fluid">
        <div className="container-fluid">
          <div className="d-flex justify-content-center gap-2 w-100">
            <div className="navbar-nav">
              <Link href="/School" className="nav-link">
                School
              </Link>
              <Link href="/About-us" className="nav-link">
                About Us
              </Link>
              <Link href="/Contact-us" className="nav-link">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
