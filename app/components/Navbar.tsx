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
  // { id: 3, name: "Piaic", link: "https://portal.piaic.org" },
  // { id: 4, name: "Panaverse", link: "https://www.panaverse.co" },
  { id: 5, name: "Contact", link: "https://github.com/shoaibattari" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:flex justify-between items-center px-5 h-full gap-3 pt-5 bg-cyan-200 mx-auto ">
      <div className="duration-500 hover:-translate-y-3.5 ">
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
            className="text-gray-800 hover:text-blue-600 duration-500 hover:text-3xl hover:translate-x-2"
          >
            {link.name}
          </Link>
        </div>
      ))}

      <div className="px-8">
        <Button text={"Apply"} link={"https://portal.piaic.org/"} />
      </div>
    </div>
  );
}

export default Navbar;
