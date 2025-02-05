"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const mobileDrawerRef = useRef<HTMLDivElement | null>(null);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <div>
      <div className="fixed flex z-50 h-[56px] w-full backdrop-blur-2xl"></div>
      <nav className="fixed flex flex-row w-full z-50 bg-slate-300/80 p-2 items-center justify-between shadow-slate-400 shadow-md">
        <div className="flex items-center">
          <Image
            src={"logo.svg"}
            alt="logo"
            width={40}
            height={40}
            className="self-start"
          />
        </div>
        <div className="hidden self-center lg:block absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex flex-row items-center justify-center gap-16">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-2xl text-green-700 font-semibold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button onClick={toggleNavbar} className="text-green-700 lg:hidden">
          {mobileDrawerOpen ? (
            <IoClose className="size-8" />
          ) : (
            <IoMenu className="size-8" />
          )}
        </button>

        <div
          ref={mobileDrawerRef}
          className={`fixed bottom-0 right-0 z-50 mx-auto flex h-[75vh] w-[100vw] bg-slate-300/80 flex-col items-center overflow-y-auto rounded-t-3xl shadow-2xl transition-all duration-500 ease-in-out lg:hidden ${
            mobileDrawerOpen
              ? "opacity-100 backdrop-blur-2xl shadow-2xl"
              : "pointer-events-none opacity-0"
          }`}
        >
          <ul
            className={`mt-16 flex transform flex-col items-center space-y-16 transition-transform duration-500 ease-out ${
              mobileDrawerOpen ? "-translate-y-0" : "translate-y-24"
            }`}
          >
            {navItems.map((item) => (
              <li
                key={item.href}
                className={`text-4xl text-green-700 font-bold`}
              >
                <Link href={item.href} onClick={toggleNavbar}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
