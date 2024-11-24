import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <nav className="">
        <div className=" hidden md:flex justify-between md:w-[1280px] w-[428px] md:h-[54px]    h-[54px] bg-[#F7F7F7] border-b-[1.5px]  border-[#676767] ">
          <div className=" flex space-x-5 w-[396px] h-[30px]  items-center py-7 mx-5  ">
            <p className="w-[255px]  h-[21px] text-[14px] font-normal">
              Phone Number: 956 742 455 678
            </p>
            <span className="border-[1px]  h-9 border-[#676767]"></span>

            <p className=" w-[149px] h-[21] text-[14px] font-normal   ">
              Email:info@ddsgnr.com
            </p>
          </div>
          <div className=" ml-40 w-[736px] h-[24px] ">
            <ul className="flex  space-x-6 items-center justify-end  mr-10 h-14   ">
              <li></li>
              <li className="text-2xl w-[24px] h-[24px] cursor-pointer ">
                {" "}
                <FaFacebookF />{" "}
              </li>
              <li className="text-2xl w-[24px] h-[24px]  cursor-pointer">
                {" "}
                <FaInstagram />{" "}
              </li>
              <li className="text-2xl w-[24px] h-[24px]  cursor-pointer">
                {" "}
                <FaTwitter />{" "}
              </li>
              <li className="text-2xl w-[24px] h-[24px] cursor-pointer ">
                {" "}
                <FaLinkedin />{" "}
              </li>

              <li></li>
            </ul>
          </div>
        </div>

        {/* main navbar */}

        <div className="  flex md:w-[1280px] w-[428px] md:h-[72px]   h-[72px] bg-[#F7F7F7]   md:mt-3  border-b-[1.5px]  border-[#676767]  ">
          <div
            className="flex space-x-2 mx-6 md:mx-16 w-[130.6px] h-[41px]  items-center pt-7 cursor-pointer  
             "
          >
            <Image
              src={"/images/Frame 1.svg"}
              alt={"Logo"}
              width={32.58}
              height={30.38}
            />
            <h1 className="  w-[90px] h-[30px] text-[25.07px] font-bold text-[#000000] ">
              Ddsgnr
            </h1>
          </div>

          <div className="md:bg-[#FFFFFF] w-[910px] h-[44px] my-3 mx-8 ">
            <ul className=" hidden md:flex md:space-x-[40px] space-y-[3px] items-center ">
              <li></li>
              <li className=" border-b-[1.5px] w-12 border-black cursor-pointer">
                Home
              </li>
              <li className="cursor-pointer">Courses</li>
              <li className="cursor-pointer">Services</li>
              <li className="cursor-pointer">Achievement </li>
              <li className="cursor-pointer">About Us </li>
              <li className="cursor-pointer">Testimonial </li>
              <div className="space-x-5 pl-6 ">
                <button className="border-[1.5px] w-[80px] h-[40px] border-black p-2 rounded-lg  hover:bg-black hover:text-white hover:font-bold">
                  Login
                </button>
                <button className="bg-[#000000] text-white p-2 w-[95px] h-[40px] text-center  rounded-lg  hover:bg-gray-800  hover:font-bold ">
                  {" "}
                  Sign Up
                </button>
              </div>
            </ul>
            <div className="md:hidden flex justify-end  py-1 ">
              <a className="text-4xl font-bold text-black " href="">
                {" "}
                &#8801;{" "}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
