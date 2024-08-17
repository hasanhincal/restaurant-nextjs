import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="flex items-center justify-between h-12 p-4 text-red-500 border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* LEFT-LINKS */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href={"/"}>Homepage</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/"}>Contact</Link>
      </div>
      {/* LOGO */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href={"/"}>Massimo</Link>
      </div>
      {/* MOBİLE-MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT-LINKS */}
      <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
        <div className="md:absolute top-3 right-3 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png" alt="phone" width={20} height={20} />
          <span>444 44 44</span>
        </div>
        {!user ? (
          <Link href={"/login"}>Login</Link>
        ) : (
          <Link href={"/orders"}>Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
