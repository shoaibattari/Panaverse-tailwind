import Class from "../../public/class.jpg";
import Image from "next/image";
import Button from "./Button";
export default function Hero() {
  return (
    <div className="sm:mt-full md:mt-0 bg-gray-800 py-24 sm:py-32 relative isolate  ">
      <Image
        src={Class}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full  opacity-30 "
      />

      <div className="mx-auto  px-8 lg:px-12">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-1xl font-bold text-center text-emerald-700 md:text-3xl">
            Presidential Initiative for Artificial Intelligence and Computing
            (PIAIC)
          </h2>
          <p className="mt-6 text-1xl md:text-4xl text-gray-300  text-center space-x-16">
             Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users
            </p>
          <div className="mx-auto md:pt-14 lg:mx-0 pt-7">
            <h2 className="text-2xl font-bold text-center text-emerald-400 md:text-6xl">
              Certified Web 3.0 and Metaverse Developer: A Nationwide Program in
              Karachi, Lahore, Islamabad, and Peshawar
            </h2>
            <p className="mt-6 text-1xl  md:text-4xl text-gray-300  text-center space-x-16">
              The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
              Panaverse DAO is a movement to spread these technologies
              globally.It is Community of Web 3 and metaverse
              developers.designers , trainers , startup founders and service
              providers.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-5 gap-16 ">
          <Button text={"Apply Now"} link={"https://portal.piaic.org/"} />
          <Button text={"Courses Details"} link={"/Courses"} />
        </div>
      </div>
    </div>
  );
}
