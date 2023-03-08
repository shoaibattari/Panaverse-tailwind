import React from "react";
import CourseBox from "./components/CourseBox";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import TeachersBox from "./components/Teachers";
function page() {
  return (
    <>
      <Hero />
      <CourseBox />
      <TeachersBox />
      <Partners />

    </>
  );
}

export default page;
