import Image from "next/image";
import Link from "next/link";
import React from "react";
import Banner1 from "../../public/banner.jpg";
function Banner() {
  return (
    <div className="flex item-center flex-wrap  bg-gradient-to-r from-violet-500 to-fuchsia-800 ">
      {/* right section */}
      <div className="flex-1 px-4 py-4 ">
        <p className="font-medium text-emerald-800 eading-loose">
          Presidential Initiative for Artificial Intelligence and Computing
          (PIAIC)
        </p>
        <h1 className="flex-1 text-6xl text-black-600 font-bold font-sans ">
          Certified Web 3.0 and Metaverse Developer
        </h1>
        <h3 className="text-lg mt-4">
          A One and Quarter Years Panaverse DAO Earn as you Learn Program
          Getting Ready for the Next Generation of the Internet
        </h3>
        <h3 className="text-lg mt-4">
          Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud,
          Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics
          Technologies
        </h3>

        <div className="flex space-x-4 mt-4 font-medium ">
          <button className=" hover:bg-blue-500  rounded-lg py-2.5 px-3 w-15 bg-blue-700	">
            <Link href="https://www.panaverse.co/">Learn More</Link>
          </button>
        </div>
      </div>
      {/* left section */}
      <div className="flex w-98 max-w-sm ">
        <Image src={Banner1} width={980}  alt="bannner" />
      </div>
    </div>
  );
}

export default Banner;
