import React from "react";
import { CNQ4Detail, CNQ4link } from "../CNQ4/CNQ4Database";
import Link from "next/link";
import Button from "@/app/components/Button";

function AIQ4Details() {
  return (
    <div className="bg-slate-900 h-fit py-5 sm:py-10 ">
      <div className="mx-auto  px-6 lg:px-20 py-10 text-center ring-1 ring-inset ring-gray-900/8 duration-700  hover:scale-105  translate-y-3 -skew-x-5">
        <dl>
          {CNQ4Detail.map((ele) => (
            <div key={ele.id}>
             <p className="mt-2 text-1xl font-bold  text-white md:text-3xl">
                {ele.mainH}
              </p>
              <dt className="mt-3  rounded-lg bg-indigo-600 px-3 py-2 text-center text-sm lg:text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500">
                <Link href={ele.Link}> {ele.Heading}</Link>
              </dt>
            </div>
          ))}
        </dl>
        <div className="flex justify-around mt-5">
          {CNQ4link.map((ele) => (
             <div  key={ele.id}>
            <Button text={ele.btntext} link={ele.btnlink} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AIQ4Details;
