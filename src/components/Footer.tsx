import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red-500 flex flex-wrap justify-center gap-10 items-center">
      <div className="flex items-center gap-3">
        2024 | DESIGNED by
        <Link
          href={"https://github.com/hasanhincal"}
          target="_blank"
          className="font-bold text-xl"
        >
          Hasan HINÇAL
        </Link>
      </div>
      <p>&copy; ALL RIGHTS RESERVED</p>
    </div>
  );
};

export default Footer;
