import logo from "../../public/logo.png";
import Image from "next/image";

import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex justify-between max-x-screen-xl mx-auto bg-gray-100 py-1 px-2 sticky top-0 items-center ">
      <div><Link href="/">
        <Image src={logo} width={80} height={80} alt="Logo" />
        </Link>
      </div>
      <div className="flex space-x-4 mt-4 font-medium  -mx-3  ">
        <Link className=" rounded-lg py-2.5 px-3 hover:bg-blue-400" href="/">
          Home
        </Link>
        <Link
          className=" rounded-lg py-2.5 px-3 hover:bg-blue-400"
          href="/Courses"
        >
          Courses
        </Link>
      </div>
      
      <div className="flex space-x-4 mt-4 font-medium rounded-lg py-2.5 px-3 w-15 bg-blue-700 hover:bg-red-500">
        <Link href="https://portal.piaic.org/" className="">
          Apply
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
