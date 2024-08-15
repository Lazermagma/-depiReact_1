"use client";

import { Button } from "bootstrap";
import { React, useState } from "react";

const Counter = () => {
  const [Count, setCount] = useState(0);

  const counterIncrement = () => {
    if (Count <= 10) {
      setCount(Count + 1);
    }
  };

  const counterDecrement = () => {
    if (Count > 0) {
      setCount(Count - 1);
    }
  };

  return (
    <>
      <h1>Counter is </h1> <br />
      <h3> {Count} </h3> <br />
      <button onClick={counterIncrement}> Counter increase </button>
      <button onClick={counterDecrement}> Counter decrease </button>
    </>
  );
};

export default Counter;
