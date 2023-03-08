import React from "react";
import Button from "../components/Button";
import { cards } from "../Courses/Database";

function page() {
  return (
    <div>
      <div className="bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl lg:text-center">
            <p className="mt-2 text-5xl font-bold  text-white sm:text-7xl">
              All Courses
            </p>
            <p className="mt-20 text-2xl lg:text-5xl leading-10 tracking-tight text-slate-400 ">
              Certified Web 3.0 and Metaverse Developer: A Nationwide Program in
              Karachi, Lahore, Islamabad, and Peshawar
            </p>
          </div>
          <div className="mx-auto mt-1 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="">
              {cards.map((ele) => (
                <div
                  key={ele.id}
                  className="rounded-lg mt-5 px-3 bg-teal-400	hover:bg-gray-400	 py-10 text-center ring-1 ring-inset ring-gray-900/5 
                  duration-700 hover:scale-75 skew-x-0  md:skew-x-3	"
                >
                  <dt className=" font-bold  underline underline-offset-8 text-3xl py-4 text-indigo-900  ">
                    {ele.heading1}
                  </dt>
                  <dd className="mt-10 text-left  text-1xl md:text-2xl  leading-2 lg:text-center  text-gray-800">
                    {ele.headingText}
                  </dd>

                  <dt className=" font-semibold text-lg md:text-3xl py-10  text-indigo-600">
                    {ele.card1Heading}
                  </dt>
                  <dd className="mt-4  text-base  text-gray-600">
                    <Button text={"Course Detail"} link={ele.card1Link} />
                  </dd>

                  <dt className="font-semibold text-lg md:text-3xl py-10 text-indigo-600">
                    {ele.card2Heading}
                  </dt>
                  <dd className="mt-4 text-base  text-gray-600">
                    <Button text={"Course Detail"} link={ele.card2Link} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
