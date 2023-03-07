import Image from "next/image";
import React from "react";
import Panacloud from "../../public/panacloudLogo.png";
import Saylani from "../../public/saylaniLogo.png";

function Partners() {
  return (
    <div className="w-full bg-black">
      
        <h1 className="text-3xl font-semibold text-white text-center mt-20">
          Strategic Partners
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-5 py-10 md:py-5">
          <Image src={Saylani} alt="saylani" width={300} />
          <Image src={Panacloud} alt="Panacloud" width={150} />
        </div>
      </div>
  );
}

export default Partners;
