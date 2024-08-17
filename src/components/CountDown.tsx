"use client";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2024-08-29");

const CountDown = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <Countdown
          key={endingDate.toISOString()}
          className="text-yellow-300 text-5xl font-bold"
          date={endingDate}
        />
      )}
    </>
  );
};

export default CountDown;
