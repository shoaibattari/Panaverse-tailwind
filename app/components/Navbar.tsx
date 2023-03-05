"use client";
import logo from "../../public/logo.png";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export const NAV = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Courses", link: "/Courses" },
  { id: 3, name: "Piaic", link: "https://portal.piaic.org" },
  { id: 4, name: "Panaverse", link: "https://www.panaverse.co" },
  { id: 5, name: "Contact", link: "https://github.com/shoaibattari" },
];

function Navbar() {
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full top-0 left-0">
      <div className="md:flex items-between justify-between bg-cyan-200 py-4 md:px-10 px-7">
      <div className="duration-500 hover:-translate-y-3.5 ">
        <Link href="/">
          <Image src={logo} width={100} height={40} alt="Logo" />
        </Link>
      </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl  absolute right-8 top-6 cursor-pointer md:hidden" 
        >
          <GiHamburgerMenu name={open ? "close" : "menu"}></GiHamburgerMenu>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 bg-cyan-200 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in${open ? "top-20 " : "top-[-490px]"
          }`}>
          {NAV.map((link) => (
            <li key={link.id} className="md:mr-20  text-xl md:my-0 my-7">
              <Link
            href={link.link}
            className="text-gray-800 hover:text-blue-600 duration-500 hover:text-4xl hover:translate-x-3"
          >
            {link.name}
          </Link>
            </li>
          ))}
        <Button text={"Apply"} link={"https://portal.piaic.org/"} />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;