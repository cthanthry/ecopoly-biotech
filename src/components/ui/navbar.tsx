"use client";
import Image from "next/image";
import Link from "next/link";
//import { useState } from "react";
import { IoMenu } from "react-icons/io5";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  //const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  return (
    <nav className="fixed flex flex-row w-full z-50 bg-transparent backdrop-blur-2xl p-2 items-center justify-between shadow-slate-400 shadow-md">
      <div className="flex items-center">
        <Image src={"logo.svg"} alt="logo" width={40} height={40} className="self-start"/>
      </div>
      <div className="hidden self-center lg:block absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex flex-row items-center justify-center gap-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="text-xl text-green-700 font-semibold">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <button className="lg:hidden">
        <IoMenu size={40} className="text-green-700"/>
      </button>
    </nav>
  );
};

export default Navbar;
