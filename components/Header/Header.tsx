import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Header = () => {
  return (
    <div>

      <nav>
        <div className="flex justify-between w-full h-[54px] bg-[#F7F7F7]">
          <div className=" flex space-x-5 w-[396px] h-[30px]  items-center py-7 mx-16  ">
            <p className="w-[205]   h-[21px] text-[14px] font-normal">Phone Number: 956 742 455 678
            </p>
            <span className="border-[1px]  h-9 border-[#676767]"></span>

            <p className=" w-[149px] h-[21] text-[14px] font-normal   ">
            Email:info@ddsgnr.com
            </p>
          </div>
          <div className=" ml-40 w-[736px] h-[24px] ">
            <ul className="flex  space-x-6 items-center justify-end  mr-10 h-12">

              <li></li>
              <li className="text-2xl w-[24px] h-[24px] "> <FaFacebookF/> </li>
              <li className="text-2xl w-[24px] h-[24px] "> <FaInstagram/> </li>
              <li className="text-2xl w-[24px] h-[24px] "> <FaTwitter/> </li>
              <li className="text-2xl w-[24px] h-[24px] "> <FaLinkedin/> </li>
              
              <li></li>
            </ul>
          </div>

        </div>
      </nav>

    </div>
  )
}

export default Header
