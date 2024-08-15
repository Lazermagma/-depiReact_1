"use client";

import { React, useState } from "react";
import Styles from "./school.module.css";
const School = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [db_Arabic, setDb_Arabic] = useState(0);
  const [db_English, setDb_English] = useState(0);
  const [db_Math, setDb_Math] = useState(0);
  const [sum, setSum] = useState(0);

  //show loading for 3 seconds then show sum
  const gradesCalc = () => {
    setIsLoading(true);
    setTimeout(() => {
      setSum(db_Arabic + db_English + db_Math);
      setIsLoading(false);
    }, 2000);
  };

  const LoadingGrade = () => {
    return (
      <>
        <div class="spinner-border text-light" role="status"></div>
      </>
    );
  };
  return (
    <div className="container-fluid bg-dark vh-100 d-flex ">
      <div className=" text-white container m-auto d-flex flex-column text-center rounded  justify-content-center ">
        <h1>School Grade Calculator</h1>
        <div className=" d-flex flex-column  container w-50 ">
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
          onClick={gradesCalc}
        >
          Calculate
        </button>
        <div className="container my-5">
          <h2>
            {isLoading ? (
              <LoadingGrade />
            ) : (
              sum !== null && <div>Grade Equals {sum}</div>
            )}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default School;

// text box
