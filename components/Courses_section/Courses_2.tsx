import React from "react";
import Courses_Card_2 from "../Cards/Courses_Card_2";

const Courses_2 = () => {
  return (
    <section className=" md:w-[1280px] md:h-[1742px] flex flex-col md:items-center md:justify-start">
      <div className=" md:w-[768px] md:h-[118px] text-center md:px-5 px-0  flex flex-col items-center sm:mr-40 md:mr-0  justify-between py-20 ">
        <h1 className=" text-[56px] font-bold w-[768px] h-[67px]">Courses</h1>
        <p className=" w-[768px] h-[27px] text-[18px] my-6 ">
          Your Ultimate Guide to learning
        </p>
      </div>
      <ul className=" w-[336px] h-[40px] flex items-center justify-center ml-12 md:ml-0 sm:ml-20 space-x-7  md:space-y-32 space-y-10 cursor-pointer ">
        <li></li>
        <li className=" border-b-[1.5px] border-black w-16 text-center  ">
          Popular
        </li>
        <li>Recommended</li>
        <li>Best Price</li>
      </ul>
      <div
        className=" flex flex-wrap justify-center gap-4 mt-24
       "
      >
        <Courses_Card_2
          Img="/Images/card-image-1.svg"
          skill="Design"
          heading=" UX/UI Design 201"
        />
        <Courses_Card_2
          Img="/Images/card-image-2.svg"
          skill="Programmimg"
          heading=" Introduction to Python"
        />
        <Courses_Card_2
          Img="/Images/card-image-3.svg"
          skill="Business"
          heading=" Data Analysis for Beginners"
        />
        <Courses_Card_2
          Img="/Images/card-image-4.svg"
          skill="Art"
          heading="Art Specialization"
        />
        <Courses_Card_2
          Img="/Images/card-image-5.svg"
          skill="Law"
          heading=" Rule of Law"
        />
        <Courses_Card_2
          Img="/Images/card-image-6.svg"
          skill="Tech"
          heading=" Introduction to webflow"
        />
      </div>
      <button className=" w-[152px] h-[40px] border-[1px] my-24 border-black rounded-[5px] mx-40 md:mx-0  hover:bg-black hover:font-bold  hover:text-white ">
        View All Courses
      </button>
    </section>
  );
};

export default Courses_2;
