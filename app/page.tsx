import React from "react";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero_Section/Hero";
import Companies from "@/components/Companies_Section/Companies";
import Courses from "@/components/Courses_section/Courses";
import Achievement from "@/components/Achievement_Section/Achievement";
import Courses_2 from "@/components/Courses_section/Courses_2";

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Companies />
      <Courses />
      <Achievement />
      <Courses_2 />
    </div>
  );
};

export default page;
