import React from "react";
import Button from "./Button";
import Image from "next/image";
import zia from "../../public/Zia.webp";
import zeeshan from "../../public/zeeshan.jpg";
import daniyal from "../../public/daniyal.jpg";
import adil from "../../public/adil.jpg";
import hira from "../../public/hira.webp";

const Faculty = [
  {
    id: 1,
    name: "COO PIAIC Zia Khan",
    text: "Main Instructor",
    image: "zia",
  }, {
    id: 2,
    name: "COO PIAIC Zia Khan",
    text: "Main Instructor",
    image: "zeeshan",
  }, {
    id: 3,
    name: "COO PIAIC Zia Khan",
    text: "Main Instructor",
    image: "daniyal",
  }, {
    id: 4,
    name: "COO PIAIC Zia Khan",
    text: "Main Instructor",
    image: "adil",
  }, {
    id: 5,
    name: "COO PIAIC Zia Khan",
    text: "Main Instructor",
    image: "hira",
  },
];

function TeachersBox() {
  return (
    <div>
      <h2 className="text-1xl md:text-2xl font-semibold uppercase mt-32 text-center">
        ------------Faculty------------
      </h2>
      <div className="flex md:flex-shrink-0 flex-wrap justify-center content-center gap-5 ">
      <div className="flex items-center gap-x-6">
        <div>
          <Image src={zia} className="h-36 w-36 rounded-full" />
        </div>
        <div>
          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
            Leslie Alexander
          </h3>
          <p className="text-sm font-semibold leading-6 text-indigo-600">
            Co-Founder / CEO
          </p>
        </div>
      </div>
      </div>


      {/* <div className="flex md:flex-shrink-0 flex-wrap justify-center content-center gap-5 ">
        {Faculty.map((ele) => (
          <div
            className="mr-3 ml-3 mt-20 mb-5  box-border p-4 border-1 w-4/4 md:w-2/4 hover:uppercase lg:w-1/4 drop-shadow-2xl bg-emerald-900 hover:bg-slate-900 rounded-2xl cursor-pointer hover:scale-110 "
            key={ele.id}
          >
            <div className="mt-5 text-center font-extrabold text-2xl text-cyan-200">
              {ele.heading1}
            </div>
            <div className="font-bold text-1xl h-20 mt-10 md:h-36 lg:h-40 text-gray-200">
              {ele.heading2}
            </div>
            <div className=" mt-20 md:mt-10 text-center">
              <Button text={ele.btntext} link={ele.btnlink} />
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default TeachersBox;
