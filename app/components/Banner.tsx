import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import React from "react";
// import Banner1 from "../../public/Banner1.jpg";
import Class from "../../public/class.jpg";
function Banner() {
  return (
    <>
      <div className="flex item-center flex-wrap bg-slate-500">
        {/* right section */}
        <div className="flex-1 px-4 py-4 max-">
          <p className="font-medium text-emerald-800 eading-loose">
            Presidential Initiative for Artificial Intelligence and Computing
            (PIAIC)
          </p>
          <h1 className="text-2xl lg:text-6xl font-bold font-sans ">
            Certified Web 3.0 and Metaverse Developer
          </h1>
          <h3 className="text-lg mt-4">
            A One and Quarter Years Panaverse DAO Earn as you Learn Program
            Getting Ready for the Next Generation of the Internet
          </h3>
          <h3 className="text-lg mt-4">
            Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
            Cloud, Edge, Ambient Computing/IoT, Network Automation, and
            Bioinformatics Technologies
          </h3>

          <div className="flex justify-center mt-5 ">
            <Button text={"Learn More"} link={"https://www.panaverse.co"} />
          </div>
        </div>
        {/* left section */}
        <div className="flex w-98 max-w-sm">
          <Image src={Class} width={980} alt="Class" />
        </div>
      </div>

    </>
  );
}

export default Banner;

// import React from "react";

// function Banner() {
  // return (
    // <div>
        // <div className="container  mx-auto">
        //   {/* <div className="lg:flex lg:items-center lg:justify-between"> */}
        //       <div className="w-full bg-center bg-cover h-full">

        //         <Image
        //           src={Class}
        //           alt=""
        //         />

               
        //     </div>
        //   </div>
        //  </div>
  // );
// }

// export default Banner;
