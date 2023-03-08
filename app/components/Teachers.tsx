import React from "react";
import Image from "next/image";

const Faculty = [
  {
    id: 1,
    name: "COO PIAIC Zia Khan",
    text: "Main Instructor",
    image: "/../public/Zia.webp",
  },
  {
    id: 2,
    name: "Sir Zeeshan",
    text: "Instructor",
    image: "/../public/zeeshan.jpg",
  },
  {
    id: 3,
    name: "Sir Daniyal",
    text: "Instructor",
    image: "/../public/daniyal.jpg",
  },
  {
    id: 4,
    name: "Sir Adil",
    text: "Instructor",
    image: "/../public/adil.jpg",
  },
  {
    id: 5,
    name: "Mam Hira",
    text: "Instructor",
    image: "/../public/hira.webp",
  },
];

function TeachersBox() {
  return (
    <div>
      <h2 className="text-1xl md:text-2xl font-semibold uppercase mt-32 text-center">
        ------------Faculty------------
      </h2>
      <div className="flex md:flex-shrink-0 flex-wrap justify-center content-center">
        {Faculty.map((ele) => (
          <div
            className="mr-3 ml-3 mt-20 mb-5  box-border p-4 border-1 w-4/4 md:w-1/4 hover:uppercase lg:w-1/4 drop-shadow-2xl cursor-pointer hover:scale-125 "
            key={ele.id}
          >
            <div>
              <Image src={ele.image} width={120} height={120} alt="Teacher"  className="h-40 w-40 rounded-full" />
            </div>

            <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">
              {ele.name}
            </h3>
            <p className="text-lg font-semibold leading-6 text-indigo-600">
              {ele.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeachersBox;
