import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface Props {
  name: string;
  skill: string;
  logo: string;
}

const Testimonials_Card = ({ name, skill, logo }: Props) => {
  return (
    <div className=" w-[362.67px] min-h-[321.89px] border-[1px] border-black  p-[32px]   ">
      <div className=" flex flex-col space-y-7 space-x-2   ">
        <div className=" min-w-20 h-[18.89px] px-3 ">
          <div className="flex gap-[4px]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <p className=" w-[298.67px] h-[135px]  text-[18px]  ">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare."
        </p>
        <div className=" w-[215px] h-[56px] flex space-x-4   ">
          <Image
            src={logo}
            alt="Logo"
            width={56}
            height={56}
            className=" rounded-[50%] "
          />
          <div className=" my-1 ">
            <h1 className=" w-[200px] h-[24px]  text-[16px] font-semibold ">
              {name}
            </h1>
            <h2 className=" w-[200px] h-[24px] text-[16px] font-normal">
              {skill}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials_Card;
