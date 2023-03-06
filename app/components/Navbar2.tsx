"use client";
import logo from "../../public/logo.png";
import Image from "next/image";
import React from "react";
import Link from "next/link"; 
import Button from "./Button";

export const NAV = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Courses", link: "/Courses" },
  { id: 3, name: "Piaic", link: "https://portal.piaic.org" },
  { id: 4, name: "Panaverse", link: "https://www.panaverse.co" },
];

function Navbar() {
  return (
    <div className=" w-full top-0 left-0 ">
      <div className="md:flex items-center justify-between bg-cyan-200 py-4 md:px-0 px-7 ">
        <div className="duration-500  hover:-translate-y-3.5">
          <Link href="/">
            <Image src={logo} width={100} height={40} alt="Logo" />
          </Link>
        </div>

       

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 bg-cyan-200 transition-all duration-500}`
        }
        >
          {NAV.map((link) => (
            <li key={link.id} className="md:mr-20  text-xl md:my-0 my-2"> 
              <Link
                href={link.link}
                className=" text-emerald-800 font-bold hover:text-blue-600 duration-500 hover:text-4xl hover:translate-x-3 "
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
