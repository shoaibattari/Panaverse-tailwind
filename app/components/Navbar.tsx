import logo from "../../public/logo.png";
import Image from "next/image";

import React from "react";
import Link from "next/link";
import Button from "./Button";

function Navbar() {
  return (
    <div className="flex justify-between max-x-screen-xl mx-auto bg-blue-100 py-1 px-2 sticky top-0 items-center ">
      <div>
        <Link href="/">
          <Image src={logo} width={80} height={80} alt="Logo" />
        </Link>
      </div>
      <div className="flex space-x-4 mt-4 font-medium  -mx-3  ">
        <Link
          className=" rounded-lg py-2.5 px-3 hover:bg-blue-400"
          href="/"
        >
          Home
        </Link>
        <Link
          className=" rounded-lg py-2.5 px-3 hover:bg-blue-400"
          href="/Courses"
        >
          Courses
        </Link>
      </div>

      <div className="mt-3">
        <Button text={"Apply"} link={"https://portal.piaic.org/"} />
      </div>
    </div>
  );
}

export default Navbar;
