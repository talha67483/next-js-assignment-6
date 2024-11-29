import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="md:w-[1280px] md:min-h-[684px] w-[428px] min-h-[1411px] bg-[#FFFFFF] md:p-[80px] md:px-14 md:py-32  px-[24px] py-[48px]  ">
      <div className=" md:w-[1120px]  md:h-[524px] w-[380px] h-[1315px]  ">
        <div className=" md:w-[1120px] md:h-[82px] w-[380px] h-[261px]  flex  flex-col md:flex-row  md:justify-between justify-center items-center  ">
          <div className=" md:w-[500px] md:h-[51px] w-[287px] h-[91px]  ">
            <h1 className=" md:w-[500px] md:h-[27px] w-[287px] h-[27px] md:text-start  text-center text-[18px] font-semibold ">
              Subscribe to our newsletter
            </h1>
            <p className=" md:w-[500px] md:h-[24px] w-[287px] h-[48px]  md:text-start text-center font-normal text-[16px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="md:w-[400px] md:h-[82px] w-[380px] h-[146px] md:inline-block flex flex-col items-center  justify-center space-y-3   ">
            <input
              type="text"
              placeholder="Enter your email"
              className=" md:w-[265px] w-[380px] h-[48px]  p-4  pl-5 border-[1px] border-black rounded-[5px] "
            />
            <button className="   md:w-[119px] w-[380px]  h-[48px] border-[1px] rounded-[5px] border-black md:py-[12px] md:px-[24px] text-[16px] font-normal md:ml-4  ">
              Subscribe
            </button>
            <p className=" w-[400px] h-[18px] md:text-start text-center  text-[12px] font-normal pt-3  ">
              By subscribing you agree to with our Privacy Policy
            </p>
          </div>
        </div>

        <div className=" md:w-[1120px] md:-h-[225px] w-[172px] min-h-[811px]  md:mt-40 mt-0 flex flex-col md:flex-row  p-24 md:p-0 ">
          <div className=" flex md:justify-between  flex-col md:flex-row     ">
            <div
              className="flex space-x-2 mx-6 md:mx-16 w-[130.6px] h-[41px]  ml-12 md:ml-0   items-center pt-7 cursor-pointer  
             "
            >
              <div className=" md:mr-20 mr-0  flex space-x-2 ">
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
            </div>
            <div className=" flex md:gap-[40px] md:flex-row flex-col md:ml-16 ml-0    ">
              <div className=" md:ml-20 ">
                <h1 className=" w-[250px] h-[24px] text-[16px] font-semibold mt-16 md:mt-0 md:ml-0 ml-24      ">
                  Courses
                </h1>
                <ul className=" w-[250px] h-[185px] text-[14px] space-y-4 pt-10  flex flex-col items-center md:items-start ml-[5px] md:ml-0    ">
                  <li>Business</li>
                  <li>Development</li>
                  <li>Technology</li>
                  <li>Design</li>
                  <li>Programming</li>
                </ul>
              </div>
              <div>
                <h1 className=" w-[250px] h-[24px] text-[16px] font-semibold my-5 ml-24 md:ml-0 mt-16 md:mt-0  ">
                  Resources
                </h1>
                <ul className=" w-[250px] h-[185px] text-[14px] space-y-4 pt-4 flex flex-col items-center md:items-start  ml-[5px] md:ml-0  ">
                  <li>Career</li>
                  <li>Resume</li>
                  <li>Learning</li>
                  <li>Interview Preparation</li>
                  <li>Jobs</li>
                </ul>
              </div>
              <div>
                <h1 className=" w-[250px] h-[24px] text-[16px] font-semibold my-5 ml-24 md:ml-0 mt-16 md:mt-0   ">
                  About Us
                </h1>
                <ul className=" w-[250px] h-[185px] text-[14px] space-y-4 pt-4 flex flex-col items-center ml-[5px] md:ml-0  md:items-start    ">
                  <li>Contact</li>
                  <li>Help/Support</li>
                  <li>FAQ</li>
                  <li>Terms and Conditions</li>
                  <li>Partners</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" md:w-[1120px] md:h-[57px] w-[380px] min-h-[147px]  flex flex-col md:flex-row justify-center space-y-10  ml-3  md:ml-0   md:justify-between  border-t-[1.5px] border-black pt-3   ">
        <div className=" w-[380px] h-[140px] md:w-[564px] md:h-[21px] flex flex-col items-center md:flex-row  space-x-3  space-y-8 md:space-y-0  md:mt-10 mt-0    ">
          <div className=" ml-10 md:ml-0  text-center w-[195px] h-[21px]  text-[14px] mt-6 md:mt-0  ">
            2023 Ddsgnr. All right reserved.
          </div>
          <div>
            <ul className=" flex md:space-x-6  space-x-6 text-[14px] md:text-[14px] text-center ml-6 md:ml-3 md:pl-0 pl-0 w-[345px] h-[21px]  ">
              <li className=" border-b-[1px] border-black  ">Privacy Policy</li>
              <li className=" border-b-[1px] border-black ">
                Terms of Service
              </li>
              <li className=" border-b-[1px] border-black ">
                Cookies Settings
              </li>
            </ul>
          </div>
        </div>
        <div className=" w-[132px] h-[24px] flex space-x-4 text-xl ml-36 md:ml   ">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
