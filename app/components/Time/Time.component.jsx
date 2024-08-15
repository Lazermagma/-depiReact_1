import React from "react";
import styles from "./Time.module.css";
const Time = () => {
  const currentHour = new Date().getHours();
  const isMorning = currentHour < 12;

  const Morning = () => {
    return (
      <div>
        <h1> Good Morning </h1>
        <img
          src="https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4="
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    );
  };

  const Night = () => {
    return (
      <div>
        <h1> Good Night </h1>
        <img
          src="https://cdn.pixabay.com/photo/2016/11/25/23/15/moon-1859616_640.jpg"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    );
  };
  return (
    <>
      <h1>{isMorning ? <Morning /> : <Night />}</h1>
    </>
  );
};

export default Time;
