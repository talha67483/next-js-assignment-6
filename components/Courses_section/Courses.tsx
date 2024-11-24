import React from "react";
import Courses_Card from "../Cards/Courses_Card";

const Courses = () => {
  return (
    <section className=" bg-[#FFFFFF] md:w-[1280px] md:h-[1049px] w-[428px]  min-h-[892px]  flex flex-col items-center  ">
      <div className=" md:w-[768px] md:h-[109px] text-center w-[385px] h-[162px] my-20 space-y-8  ">
        <h1 className=" md:text-[48px] text-[32px]  font-bold ">
          Explore Courses By Category
        </h1>
        <p className=" text-[18px] font-normal text-[#000000] ">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
      </div>

      <div className=" flex justify-end flex-wrap gap-[24px] ">
        <Courses_Card
          cardLogo="/images/card-logo-1.svg"
          heading=" Design & Development"
        />
        <Courses_Card cardLogo="/images/card-logo-2.svg" heading=" Marketing" />
        <Courses_Card
          cardLogo="/images/card-logo-3.svg"
          heading="Development "
        />
        <Courses_Card
          cardLogo="/images/card-logo-4.svg"
          heading="Communication"
        />
        <Courses_Card
          cardLogo="/images/card-logo-5.svg"
          heading=" Digital Marketing"
        />
        <Courses_Card
          cardLogo="/images/card-logo-6.svg"
          heading=" Self Development"
        />
        <Courses_Card cardLogo="/images/card-logo-7.svg" heading="Business" />
        <Courses_Card cardLogo="/images/card-logo-8.svg" heading=" Finance" />
        <Courses_Card
          cardLogo="/images/card-logo-9.svg"
          heading=" Consulting"
        />
      </div>
      <div className=" ">
        <button className="  my-16  w-[155px] h-[48px] hover:bg-[#212121] hover:text-white hover:font-bold border-[1.5px] rounded-md border-black ">
          View All Courses
        </button>
      </div>
    </section>
  );
};

export default Courses;
