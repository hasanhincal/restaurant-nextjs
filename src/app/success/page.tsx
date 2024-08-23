"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const SuccessPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const payment_intent = searchParams.get("payment_intent");
  const { width, height } = useWindowSize(900, 1024);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await fetch(`http://localhost:3000/api/confirm/${payment_intent}`, {
          method: "PUT",
        });
        setTimeout(() => {
          router.push("/orders");
        }, 5000);
      } catch (err) {
        console.log(err);
      }
    };

    makeRequest();
  }, [payment_intent, router]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center relative">
        <div className="text-center text-2xl text-green-700">
          <p className="max-w-[600px]">
            Payment successful. You are being redirected to the orders page.
            Please do not close the page.
          </p>
          <Confetti
            width={width}
            height={height}
            className="absolute mx-auto"
          />
        </div>
      </div>
    </>
  );
};

export default SuccessPage;
