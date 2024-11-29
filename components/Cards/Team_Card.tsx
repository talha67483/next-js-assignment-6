import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

interface Props {
  profession: string;
  name: string;
  pic: string;
}

const Team_Card = ({ profession, name, pic }: Props) => {
  return (
    <div className=" w-[394.67px] h-[273px] flex flex-col items-center justify-center space-y-4  mt-20 ">
      <Image src={pic} alt="Team" width={80} height={80} />
      <h1 className=" w-[394.67px] h-[30px] font-semibold  text-[20px] text-center pt-2 ">
        {name}
      </h1>
      <p className=" w-[394.67px] h-[27px] text-[18px] font-normal text-center ">
        {profession}
      </p>
      <div className=" flex h-full items-end space-x-4 cursor-pointer ">
        <FaLinkedin />
        <FaTwitter />
        <AiOutlineGlobal />
      </div>
    </div>
  );
};

export default Team_Card;
