"use client";

import { React, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

import Link from "next/link";
import { redirect } from "next/navigation";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState("");
  const [ErrorRtn, setErrorRtn] = useState(false);

  const [LogSuccess, setLogSuccess] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        setLogSuccess(true);
        setTimeout(() => {
          setLogSuccess(false);
        }, 3000);

        setTimeout(() => {
          window.location.href = "/Login";
        }, 1000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setErrorRtn(true);
        setTimeout(() => {
          setErrorRtn(false);
        }, 2000);
        setError(errorCode);
      });
  };
  return (
    <>
      <div>
        <h1 className="text-center p-5">Sign Up Form</h1>

        <form>
          <div className="container form-group d-flex justify-content-center flex-column w-50">
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <br />
            <input
              type="password"
              placeholder="password"
              className="p-2 rounded"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <br />
            <button
              type="submit"
              className="btn btn-warning "
              onClick={onSubmit}
            >
              Sign Up
            </button>
            {ErrorRtn ? (
              <div class="alert alert-danger my-5" role="alert">
                Error: {Error}
              </div>
            ) : (
              ""
            )}

            {LogSuccess ? (
              <div class="alert alert-success my-5" role="alert">
                Signed Up successfully!
              </div>
            ) : (
              ""
            )}
          </div>
        </form>

        <div className="d-flex gap-2 justify-content-center ">
          <p>Already have an Account? </p>
          <Link href="/Login"> Sign In </Link>
          <p> From Here </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
