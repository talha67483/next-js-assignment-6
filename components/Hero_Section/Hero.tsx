import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="md:w-[1280px] md:h-[800px] w-[428px] h-[780px] bg-[#FFFFFF] flex flex-col md:flex-row    ">
      <div className=" md:w-[640px] md:h-[300px] w-[428px] h-[390] md:pl-[80px] md:pr-[60px] md:my-[280px] md:mx-0  mx-16 my-9   ">
        <h1 className=" md:w-[500px] md:h-[134px] w-[380px] h-[96px]  font-bold text-[40px] md:text-[56px] text-[#000000] ">
          Learn new skills online with ease
        </h1>
        <p
          className=" md:my-10 my-6
         md:mr-0 md:w-[500px] md:h-[54px] w-[380px] h-[54px] font-normal  md:text-[18px] text- text-[#000000]  "
        >
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>

        <div className="">
          <button className=" md:mx-5 w-[178px] h-[48px]  bg-[#000000] text-white  rounded-md font-normal text-[16px] hover:bg-gray-700 hover:font-bold duration-100  hover:duration-200  ">
            Start learning now
          </button>
          <button className=" ml-3 md:mx-2 w-[164px] h-[48px] border-[1.5px] border-black  rounded-md font-normal text-[16px] hover:bg-black hover:text-white hover:font-bold hover:duration-300">
            Explore Courses
          </button>
        </div>
      </div>
      <div className=" hidden md:inline-block  ">
        <Image
          src={"/images/Hero-Image.svg"}
          alt="Hero Image"
          className="   "
          width={640}
          height={900}
        />
      </div>
      <div className=" md:hidden ">
        <Image
          src={"/images/Hero-Image.svg"}
          alt="Hero Image"
          className="   "
          width={428}
          height={390}
        />
      </div>
    </section>
  );
};

export default Hero;
