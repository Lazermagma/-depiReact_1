"use client";
import Link from "next/link";
import { React, useRef, useState, useEffect } from "react";

const useHooks = () => {
  const [Msg, setMsg] = useState("Hello");
  const r = useRef(null);
  useEffect(() => {
    console.log("Hello");
    setTimeout(() => {
      r.current.click();
    }, 3000);
  }, 3000);

  return (
    <>
      <div className="container-fluid vh-100 p-auto m-auto bg-light ">
        <button
          ref={r}
          onClick={() => {
            setMsg("Good Morning");
          }}
        >
          Morning
        </button>
        <br />
        <button
          onClick={() => {
            setMsg("Good Afernoon");
          }}
        >
          Afternoon
        </button>
        <br />
        <button
          onClick={() => {
            setMsg("Good Evening");
          }}
        >
          Evening
        </button>
        <br />
        <button
          onClick={() => {
            setMsg("Good Night");
          }}
        >
          Night
        </button>
        <br />
        <h1> {Msg}</h1>
        <Link href="/"> Go to home page</Link>
      </div>
    </>
  );
};

export default useHooks;
