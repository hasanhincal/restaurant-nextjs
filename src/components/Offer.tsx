import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* TEXT-CONTINER */}
      <div className="text-white text-center p-6 flex-1 flex flex-col items-center justify-center gap-8">
        <h1 className=" text-5xl font-bold">Delicious Burger & French Fry</h1>
        <p className="xl:text-xl">
          Progressively simplify effective e-toilers and process-centric methots
          of empowerment. Quicly pontificate parallel.
        </p>
        <CountDown />
        <button className="bg-red-500 rounded-md px-6 py-3">Order Now</button>
      </div>
      {/* IMAGE-CONTAINER */}
      <div className="relative w-full flex-1 md:h-full">
        <Image
          src={"/offerProduct.png"}
          alt=""
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Offer;
