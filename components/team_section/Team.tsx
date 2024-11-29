"use client";
import Team_Card from "../Cards/Team_Card";
import { useState } from "react";

const Team = () => {
  const [click, setClick] = useState(false);
  return (
    <div>
      <section className=" hidden md:inline-block md:w-[1280px] md:h-[895px] w-[428px]  min-h-[1075px]   bg-[#F7F7F7]   ">
        <div className=" flex items-center flex-col space-y-8 pt-10 ">
          <h1 className=" md:w-[768px] md:h-[58px] w-[363px] h-[42px]  font-bold md:text-[48px] text-[32px] text-center  ">
            {" "}
            Our team
          </h1>
          <p className=" md:w-[768px] md:h-[27px] w-[363px] h-[54px] text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>

        <div className=" flex flex-wrap ">
          <Team_Card
            profession="Marketing Coordinator"
            name="James Nduku"
            pic="/images/team-1.svg"
          />
          <Team_Card
            profession="Nursing Assistant"
            name="Joseph Munyambu"
            pic="/images/team-2.svg"
          />
          <Team_Card
            profession="Medical Assistant"
            name="Joseph Ngumbau"
            pic="/images/team-3.svg"
          />
          <Team_Card
            profession="Web Designer"
            name="Erick Kipkemboi"
            pic="/images/team-4.svg"
          />
          <Team_Card
            profession="President of Sales"
            name="Stephen Kerubo"
            pic="/images/team-5.svg"
          />
          <Team_Card
            profession="Dog Trainer"
            name="John Leboo"
            pic="/images/team-6.svg"
          />
        </div>
      </section>

      <section className=" md:hidden inline-block  w-[428px]  min-h-[1075px]   bg-[#F7F7F7]   ">
        <div className=" flex items-center  flex-col space-y-8 pt-10 ">
          <h1 className="  w-[363px] h-[42px]  font-bold  text-[32px] text-center  ">
            {" "}
            Our team
          </h1>
          <p className="   w-[363px] h-[54px] text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>

        <div className=" flex flex-wrap justify-center ">
          <Team_Card
            profession="Marketing Coordinator"
            name="James Nduku"
            pic="/images/team-1.svg"
          />
          <Team_Card
            profession="Nursing Assistant"
            name="Joseph Munyambu"
            pic="/images/team-2.svg"
          />
          <Team_Card
            profession="Medical Assistant"
            name="Joseph Ngumbau"
            pic="/images/team-3.svg"
          />
        </div>

        {click && (
          <div className=" flex flex-wrap justify-center ">
            <Team_Card
              profession="Web Designer"
              name="Erick Kipkemboi"
              pic="/images/team-4.svg"
            />
            <Team_Card
              profession="President of Sales"
              name="Stephen Kerubo"
              pic="/images/team-5.svg"
            />
            <Team_Card
              profession="Dog Trainer"
              name="John Leboo"
              pic="/images/team-6.svg"
            />
          </div>
        )}
        <div className=" flex justify-center h-32 items-center">
          <button
            onClick={() => {
              setClick(!click);
            }}
            className=" w-[89px] h-[40px] border-[1px] border-black  rounded-[5px] hover:bg-[#212121] hover:text-white hover:font-bold  "
          >
            {click ? "View Less" : "View All"}{" "}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Team;
