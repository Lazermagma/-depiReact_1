"use client";

import { React, useState } from "react";
import Login from "@/app/Login/page";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/app/firebase/firebase";

const LoginModal = ({ show }) => {
  const [Toggle, setToggle] = useState(true);

  const closeWindow = () => {
    setToggle(false);
  };

  const ShowWindow = () => {
    setToggle(true);
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      //if user is signed in
      const uid = user.uid;
      console.log(uid);
      closeWindow();
    } else {
      //if user is not signed
      ShowWindow;
    }
  });

  return (
    <>
      {Toggle ? (
        <div>
          <div className="modal  " style={{ display: "block" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeWindow}
                  ></button>
                </div>
                <div className="modal-body">
                  <Login />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default LoginModal;
