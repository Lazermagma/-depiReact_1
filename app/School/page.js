"use client";

import { useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import LoginModal from "../components/LoginModal/LoginModal.component";

const School = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [db_Arabic, setDb_Arabic] = useState(0);
  const [db_English, setDb_English] = useState(0);
  const [db_Math, setDb_Math] = useState(0);
  const [sum, setSum] = useState(0);
  const [showGrade, setShowGrade] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check for user authentication status on mount
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
    return () => unsubscribe();
  }, []);

  // Show loading for 2 seconds, then show the sum
  const gradesCalc = () => {
    setIsLoading(true);
    setTimeout(() => {
      setSum(db_Arabic + db_English + db_Math);
      setIsLoading(false);
    }, 2000);
  };

  const LoadingGrade = () => {
    return <div className="spinner-border text-light" role="status"></div>;
  };

  const showGradeAllow = () => {
    if (isLoggedIn) {
      // If user is logged in, show grade
      setShowGrade(true);
      gradesCalc();
    } else {
      // If not logged in, show modal
      setShowModal(true);
    }
  };

  return (
    <>
      {/* Conditionally render the modal */}
      {showModal && <LoginModal />}

      <div className="container-fluid bg-dark vh-100 d-flex">
        <div className="text-white container m-auto d-flex flex-column text-center rounded justify-content-center">
          <h1>School Grade Calculator</h1>
          <div className="d-flex flex-column container w-50">
            <input
              type="number"
              placeholder="Enter Arabic grade"
              className="rounded p-2"
              value={db_Arabic}
              onChange={(e) => setDb_Arabic(parseInt(e.target.value))}
            />
            <br />
            <input
              type="number"
              className="rounded p-2"
              placeholder="Enter English grade"
              value={db_English}
              onChange={(e) => setDb_English(parseInt(e.target.value))}
            />
            <br />
            <input
              type="number"
              className="rounded p-2"
              placeholder="Enter Math grade"
              value={db_Math}
              onChange={(e) => setDb_Math(parseInt(e.target.value))}
            />
          </div>
          <br />
          <button
            type="button"
            className="btn btn-warning w-25 container"
            onClick={showGradeAllow}
          >
            Calculate
          </button>
          <div className="container my-5">
            <h2>
              {isLoading ? (
                <LoadingGrade />
              ) : (
                sum !== null && showGrade && <div>Grade Equals {sum}</div>
              )}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default School;
