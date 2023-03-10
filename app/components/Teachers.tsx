

import React from "react";
import Image from "next/image";

interface Teachers {
  id: number;
  name: string;
  text: string;
  Image: string;
  Alt: string;
}
const Faculty: Teachers[] = [
  {
    id: 1,
    name: "COO PIAIC Zia Khan",
    text: "Main Instructor",
    Image: "/Zia.webp",
    Alt: "Zia Khan",
  },
  {
    id: 2,
    name: "Sir Zeeshan",
    text: "Instructor",
    Image: "/zeeshan.jpg",
    Alt: "Sir Zeeshan",
  },
  {
    id: 3,
    name: "Sir Daniyal",
    text: "Instructor",
    Image: "/daniyal.jpg",
    Alt: "Sir Daniyal",
  },
  {
    id: 4,
    name: "Sir Adil",
    text: "Instructor",
    Image: "/adil.jpg",
    Alt: "Sir Adil",
  },
  {
    id: 5,
    name: "Mam Hira",
    text: "Instructor",
    Image: "/hira.webp",
    Alt: "Mam Hira",
  },
];

function TeachersBox() {
  return (
    <div>
      <h2 className="text-1xl md:text-2xl font-semibold uppercase mt-10 text-center">
        ------------Faculty------------
      </h2>
      <div className="flex md:flex-shrink-0 flex-wrap justify-center content-center">
        {Faculty.map((ele) => (
          <div
            className="xl:px-10 lg:px-10 md:px-8 px-7 mr-3 ml-3 mt-10 
            box-border border-1 hover:uppercase drop-shadow-2xl cursor-pointer hover:scale-125 "
            key={ele.id}
          >
            <div className="xl:mx-4 lg;mx-4 ">
              <Image
                src={ele.Image}
                width={120}
                height={120}
                alt={ele.Alt}
                className="h-40 w-40 rounded-full"
              />
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
