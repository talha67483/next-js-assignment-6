import React from "react";

const Achievement = () => {
  return (
    <section className=" md:w-[1280px] md:h-[488px] w-[428px] h-[451px]  bg-[#FFFFFF]  ">
      <div className=" flex flex-col items-center space-y-10  space-x-10 text-center ">
        <h1 className=" md:w-[1152px] md:h-[58px] w-[380px] h-[42px] text-[32px] md:text-[48px] font-bold text-center pl-10 ">
          Our Achievements.
        </h1>
        <p className=" md:w-[1152px] md:h-[54px] w-[362px] h-[81px]  text-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </div>

      {/* flex  flex-wrap md:justify-center space-y-14 space-x-10 */}

      <div></div>

      <div className=" flex flex-wrap md:space-y-10 space-y-20 md:space-x-0 space-x-14         ">
        <div></div>
        <div className=" md:w-[616px] md:h-[96px] w-[380px] h-[76px] flex ">
          <div className="  w-[182px] h-[60px]  md:w-[296px] md:h-[80px] text-center  ">
            <h1 className=" md:text-[40px] text-[20px] font-bold ">+200</h1>
            <p>Courses</p>
          </div>
          <div className="  w-[182px] h-[60px]  md:w-[296px] md:h-[80px]  text-center  ">
            <h1 className=" md:text-[40px] text-[20px] font-bold ">50K</h1>
            <p>Mentors</p>
          </div>
        </div>

        <div className="  md:w-[616px] md:h-[96px] flex w-[380px] h-[76px]  ">
          <div className="   w-[182px] h-[60px]  md:w-[296px] md:h-[80px] text-center  ">
            <h1 className=" md:text-[40px] text-[20px] font-bold ">370k</h1>
            <p>Students</p>
          </div>
          <div className="  w-[182px] h-[60px]   md:w-[296px] md:h-[80px] text-center  ">
            <h1 className=" md:text-[40px] text-[20px] font-bold ">100+</h1>
            <p>Recognition</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
