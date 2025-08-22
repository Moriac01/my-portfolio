"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/home"
  },
  {
    name: "about",
    path: "/about"
  },
  {
    name: "services",
    path: "/services"
  },
  {
    name: "works",
    path: "/projet"
  },
  {
    name: "projects",
    path: "/Contact"
  },
];

export const Header = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return path === pathname ? "text-green-500 border-b-2 border-green-500" : "text-white";
  };

  console.log(pathname);

  return (
    <header className="text-white max-w-[1200px] w-[100%] m-auto py-8 xl:py-12 px-12">
      <div className=" container gap-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold hover:animate-bounce hover:text-blue-700 cursor-pointer transition-all duration-300">
            MK<span className="text-green-500 font-extrabold animate-caret-blink">.</span>
          </h1>
        </Link>

        {/* Menu Desktop */}
        <div className="md:flex gap-12 hidden lg:flex items-center ">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${isActive(link.path)} capitalize hover:text-green-500 font-medium transition-all scale-100 duration-300`}
              >
                {link.name}
              </Link>

              
            );
          })}

          
        </div>

        <div className="flex items-center ">
          <Link href="/contact">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all duration-300">
              Contact me
            </button>
          </Link>
          </div>
      </div>
    </header>
  );
};
