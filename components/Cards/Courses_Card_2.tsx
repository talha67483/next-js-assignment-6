import React from "react";
import Image from "next/image";

import { IoStarOutline } from "react-icons/io5";

interface Props {
  skill: string;
  heading: string;
  Img: string;
}

const Courses_Card_2 = ({ skill, heading, Img }: Props) => {
  return (
    <div className=" w-[416px] h-[534px] bg-[#F7F7F7] rounded-md overflow-hidden ">
      <div>
        <Image
          src={Img}
          alt="Image-Logo-not shoeinh"
          width={416}
          height={300}
        />
      </div>
      <div className=" w-[416px] h-[210px] my-5 mx-4 ">
        <div className=" w-[382px] h-[24px] flex justify-between   ">
          <div>
            <h1 className=" text-[14px] font-semibold ">{skill}</h1>
          </div>
          <div className=" flex space-x-2 ">
            <div className=" text-xl text-gray-400  font-light">
              <IoStarOutline />
            </div>
            <h1 className=" w-[20px] h-[24px] text-[14px] font-semibold  ">
              5.0
            </h1>
          </div>
        </div>
        <h1 className=" w-[382px] h-[34px]  text-[24px] font-bold my-2  ">
          {heading}
        </h1>
        <p className="  w-[382px] h-[48px] my-2 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros.
        </p>

        <div className=" flex w-[220px] h-[40px] items-center justify-between space-y-6 ">
          <button
            className=" w-[117px] h-[40px] border-[1px] text-center border-black rounded-[5px] mt-6 hover:bg-black hover:font-bold  hover:text-white {
            
          }
            "
          >
            Enroll Now
          </button>
          <h1 className=" w-[37px] h-[24px] text-[16px] font-medium ">$400</h1>
        </div>
      </div>
    </div>
  );
};

export default Courses_Card_2;
