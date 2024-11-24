import React from "react";
import Image from "next/image";

interface Props {
  heading: string;
  cardLogo: string;
}

const Courses_Card = ({ heading, cardLogo }: Props) => {
  return (
    <div className=" w-[410.67px] h-[132px] rounded-md p-[16px] bg-[#F7F7F7] ">
      <div className=" flex  space-x-8 space-y-6  ">
        <Image src={cardLogo} alt="Logo" width={100} height={100} />

        <div className=" w-[246.67px] h-[57px]  ">
          <h1 className="  text-[20px] font-semibold text-[#000000] ">
            {heading}
          </h1>

          <p className=" text-[18px] text-[#000000] ">
            {" "}
            50+ Courses Available{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Courses_Card;
