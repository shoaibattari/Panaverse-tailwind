import React from "react";
import Button from "../components/Button";
import { cards } from "../Courses/Database";

function page() {
  return (
    <div>
      <div className="bg-white py-2 sm:py-5">
        <div className="mx-auto  px-6 lg:px-8">
          <div className="mx-auto  lg:text-center">
            <p className="mt-2 text-5xl font-bold  text-indigo-600  sm:text-7xl">
              All Courses
            </p>
            <p className=" mt-10 text-2xl lg:text-5xl leading-10 tracking-tight   text-emerald-700 ">
              Certified Web 3.0 and Metaverse Developer: A Nationwide Program in
              Karachi, Lahore, Islamabad, and Peshawar
            </p>
          </div>
          <div className="mx-auto mt-1 sm:mt-20 lg:mt-24 xl:max-w-screen-2xl">
            <dl className="">
              {cards.map((ele) => (
                <div
                  key={ele.id}
                  className="rounded-2xl  mt-5 px-3 py-2 text-center ring-1 ring-inset
                  duration-700 hover:scale-95 bg-slate-800 hover:bg-slate-900"
                >
                  <div>
                 
                    <dt className="font-bold text-3xl py-4 bg-white rounded-2xl md:rounded-full  text-emerald-500 ">
                      {ele.heading1}
                    </dt>
                    <dd className=" mt-5 text-left  text-2xl md:text-2xl  leading-2 lg:text-center  text-gray-200">
                      {ele.headingText}
                    </dd>
                    
                      <dt className="mt-2 font-semibold text-3xl md:text- py-5  rounded-2xl md:rounded-full  text-indigo-600">
                        {ele.card1Heading}
                      </dt>
                      <dd className="mt-4  text-base  text-gray-600">
                        <Button text={"Course Detail"} link={ele.card1Link} />
                      </dd>

                      <dt className="mt-2 font-semibold text-3xl md:text- py-5  rounded-2xl md:rounded-full  text-indigo-600">
                        {ele.card2Heading}
                      </dt>
                      <dd className="mt-4 text-base  text-gray-600">
                        <Button text={"Course Detail"} link={ele.card2Link} />
                      </dd>
                    </div>
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
