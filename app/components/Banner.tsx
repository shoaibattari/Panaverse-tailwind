import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import React from "react";
// import Banner1 from "../../public/Banner1.jpg";
import Class from "../../public/class.jpg";
function Banner() {
  return (
    <>
      <div className="flex item-center  justify-center flex-wrap bg-white">
        <Image
          src={Class}
          className=" "
          width={200}
          alt="Avatar"
        />

        <div className="flex-1 px-4 py-4 max-">
          <h5 className="mb-2 text-2xl font-medium leading-tight">
         
            Presidential Initiative for Artificial Intelligence and Computing
            (PIAIC)
          </h5>
          <p className="text-neutral-500 text-2xl dark:text-neutral-400 mt-6">
            Certified Web 3.0 and Metaverse Developer
          </p>

          <h5 className="mb-2 text-3xl font-medium leading-tight mt-10">
            Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
            Cloud, Edge, Ambient Computing/IoT, Network Automation, and
            Bioinformatics Technologies
          </h5>
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
