 "use client"
 import logo from "../../public/logo.png";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Button from "./Button";
import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

export const NAV = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Courses", link: "/Courses" },
  { id: 3, name: "Piaic", link: "https://portal.piaic.org" },
  { id: 4, name: "Panaverse", link: "https://www.panaverse.co" },
  { id: 5, name: "Contact", link: "https://github.com/shoaibattari" },
];
// let [open,setOpen]=useState(false);

function Navbar() {
  return (
    <div className="flex justify-between md:justify-between pt-5 bg-cyan-100">
           <div className="duration-500 hover:-translate-y-3.5">
        <Link href="/">
          <Image src={logo} width={100} height={40} alt="Logo" />
        </Link>
      </div>
      {NAV.map((link) => (
        <div
          key={link.id}
          className="md:flex md:space-x-4 mt-1 font-semibold md:ml-8 text-xl md:my-0 my-7"
        >
          <Link
            href={link.link}
            className="text-gray-800 hover:text-gray-400 duration-500 hover:translate-y-3"
          >
            {link.name}
          </Link>
        </div>
      ))}
      <div className="md:hidden flex basis-16 mt-5	 text-3xl "></div>
      <div className="px-8">
        <Button text={"Apply"} link={"https://portal.piaic.org/"} />
      </div>
    </div>
  );
}

export default Navbar;
