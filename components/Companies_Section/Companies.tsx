import React from "react";
import Image from "next/image";

const Companies = () => {
  return (
    <section className=" bg-[#F7F7F7] md:w-[1280px] md:h-[228px] w-[428px]  h-[700px] flex md:flex-row flex-col md:items-center justify-center md:space-x-4 space-x-3  ">
      <h1 className=" hidden md:inline-block   w-[320px] h-[68px] text-[24px] font-bold ">
        Trusted by 2000+ companies worldwide.
      </h1>

      <div>
        <h1 className=" md:hidden md:mx-0 text-center mx-auto w-[327px] h-[54px] text-[18px] font-bold ">
          Trusted by the world&apos;s best companies [social proof to build
          credibility]
        </h1>
      </div>
      <div className="  md:w-[880px] md:mb-0  mb-96 md:h-[56px] w-[420px] h-[50px] flex md:flex-row flex-col items-center   md:space-y-0 space-y-14   md:space-x-14 ">
        <div></div>

        <Image
          src={"/images/logo-1.svg"}
          alt="Logo 1"
          width={123.8}
          height={38.52}
        />
        <Image
          src={"/images/logo-2.svg"}
          alt="Logo 1"
          width={123.8}
          height={38.52}
        />
        <Image
          src={"/images/logo-3.svg"}
          alt="Logo 1"
          width={123.8}
          height={38.52}
        />
        <Image
          src={"/images/logo-4.svg"}
          alt="Logo 1"
          width={123.8}
          height={38.52}
        />
        <Image
          src={"/images/logo-5.svg"}
          alt="Logo 1"
          width={123.8}
          height={38.52}
        />
      </div>
    </section>
  );
};

export default Companies;
