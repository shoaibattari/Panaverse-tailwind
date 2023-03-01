import React from "react";
import Button from "../components/Button";
import { cards } from "../Courses/Database";

function page() {
  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              All Courses
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Certified Web 3.0 and Metaverse Developer: A Nationwide Program in
              Karachi, Lahore, Islamabad, and Peshawar
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-lg grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 ">
              {cards.map((ele) => (
                <div key={ele.id} className="pl-2 mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl ">
                  <dt className="font-bold text-3xl text-indigo-600 ">
                    {ele.heading1}
                  </dt>
                  <dd className="mt-2 text-base leading-10 text-gray-600">
                    {ele.headingText}
                  </dd>

                  <dt className="font-semibold text-2xl  text-indigo-600">
                    {ele.card1Heading}
                  </dt>
                  <dd className="mt-2 text-base leading-10 text-gray-600">
                    <Button text={"Course Detail"} link={ele.card1Link} />
                  </dd>

                  <dt className="font-semibold text-2xl  text-indigo-600">
                    {ele.card2Heading}
                  </dt>
                  <dd className="mt-2 text-base leading-10 text-gray-600">
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
