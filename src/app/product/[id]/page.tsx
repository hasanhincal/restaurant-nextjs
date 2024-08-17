import Price from "@/components/Price";
import { singleProduct } from "@/data";
import Image from "next/image";
import React from "react";

const SingleProductPage = () => {
  const { id, price, title, desc, img, options } = singleProduct;
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center ">
      {/* ımage-container  */}
      {img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={img}
            alt="product-detail"
            fill
            className="object-contain"
          />
        </div>
      )}
      {/* text-container */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">{title}</h1>
        <p>{desc}</p>
        <Price price={price} id={id} options={options} />
      </div>
    </div>
  );
};

export default SingleProductPage;
