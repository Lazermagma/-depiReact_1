"use client";

import { React, useState } from "react";
import Link from "next/link";
import { auth } from "@/app/firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const NavBar = () => {
  const [ShowBtn, setShowBtn] = useState(true);

  const logOut = () => {
    auth.signOut();
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      //if user is signed in
      const uid = user.uid;
      console.log(uid);
      setShowBtn(false);
    } else {
      //if user is not signed
      setShowBtn(true);
    }
  });

  return (
    <nav className="navbar navbar-expand-sm bg-dark">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand text-white p-3">
          SchoolLogo
        </Link>
        <div className="d-flex justify-content-center">
          <ul className="navbar-nav gap-5">
            <li className="nav-item">
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
        <div className="m-3">
          {ShowBtn ? (
            <Link href="/Login" passHref>
              <button className="btn btn-warning text-white">Login</button>
            </Link>
          ) : (
            <button className="btn btn-warning text-white" onClick={logOut}>
              LogOut
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
