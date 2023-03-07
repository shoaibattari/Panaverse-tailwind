import React from "react";
import Button from "./Button";

const Courses = [
  {
    id: 1,
    heading1: "Core Courses (Common in All Specializations)",
    heading2:
      "Object-Oriented Programming using TypeScript & Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit",
    btntext: "Course Details",
    btnlink: "/Q1Detail",
  },
  {
    id: 2,
    heading1: "Web 3.0 (Blockchain) and Metaverse Specialization",
    heading2:
      "Developing Smart Contracts and Planet-Scale Web 3.0 Dapps &  Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
    btntext: "Course Details",
    btnlink: "/BCQ3Detail",
  },
  {
    id: 3,
    heading1: "AI and Deep Learning Specialization",
    heading2:
      "Developing Planet-Scale Intelligent APIs and Python Programming & Deep Learning and MLOps",
    btntext: "Course Details",
    btnlink: "/AIQ3",
  },
  {
    id: 4,
    heading1: "Cloud-Native Computing Specialization",
    heading2:
      "Certified Kubernetes Application Developer (CKAD) & Developing Multi-Cloud APIs using CDK for Terraform",
    btntext: "Course Details",
    btnlink: "/CNQ3",
  },
  {
    id: 5,
    heading1: "Ambient Computing and IoT Specialization",
    heading2:
      "Ambient Computing with Voice Assistants and Matter Protocol Devices & Embedded Programming using C and Rust",
    btntext: "Course Details",
    btnlink: "/IOT3",
  },
];

function CourseBox() {
  return (
    <div>
      <h2 className="text-1xl md:text-2xl font-semibold uppercase mt-32 text-center">
        ------------Courses Outline------------
      </h2>
      <div className="flex md:flex-shrink-0 flex-wrap justify-center content-center gap-5 ">
        {Courses.map((ele) => (
          <div
            className="m-3 mt-20 mb-5  box-border p-4 border-1 w-4/4 md:w-2/4 lg:w-1/4 drop-shadow-2xl bg-emerald-900 hover:bg-slate-900 rounded-2xl cursor-pointer"
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
      </div>
    </div>
  );
}

export default CourseBox;
