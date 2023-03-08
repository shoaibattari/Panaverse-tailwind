import React from "react";
import Image from "next/image";
// import Zia from "../../public/Zia.webp"
// import Zeehsan from "../../public/Zeeshan.png"
// import Daniyal from "../../public/daniyal.jpg"
// import Adil from "../../public/adil.jpg"
// import Hira from "../../public/Hira.webp"





const Faculty = [
  {
    id: 1,
    name: "COO PIAIC Zia Khan",
    text: "Main Instructor",
    Image: "/../public/Zia.webp",
    Alt: "Zia Khan"
  },
  {
    id: 2,
    name: "Sir Zeeshan",
    text: "Instructor",
    Image: "/../public/zeeshan.jpg",
    Alt: "Sir Zeeshan"

  },
  {
    id: 3,
    name: "Sir Daniyal",
    text: "Instructor",
    Image: "/../public/daniyal.jpg",
    Alt: "Sir Daniyal"

  },
  {
    id: 4,
    name: "Sir Adil",
    text: "Instructor",
    Image: "/../public/adil.jpg",
    Alt: "Sir Adil"

  },
  {
    id: 5,
    name: "Mam Hira",
    text: "Instructor",
    Image: "/../public/hira.webp",
    Alt: "Mam Hira"

  },
];

function TeachersBox() {
  return (<div>
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
            {/* <Image src={ele.Image} width={120} height={120} alt="Teacher"  className="h-40 w-40 rounded-full" /> */}
              <Image src={ele.Image} width={120} height={120} alt={ele.Alt}  className="h-40 w-40 rounded-full" />
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
