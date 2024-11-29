import React from "react";
import Testimonials_Card from "../Cards/Testimonials_Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const cardLoop = [
  <Testimonials_Card
    key="card-1"
    skill="Software Developer"
    logo="/images/team-3.svg"
    name="James Nduku "
  />,
  <Testimonials_Card
    key="card-2"
    skill="Scrum Master"
    logo="/images/team-1.svg"
    name="Erick Kipkemboi"
  />,
  <Testimonials_Card
    key="card-3"
    skill="UI/UX Designer"
    logo="/images/team-6.svg"
    name="Stephen Kerubo"
  />,
];
const [card1, card2, card3] = cardLoop;
const Testimonials = () => {
  return (
    <section className="md:w-[1280px] min-w-[428px] h-[681.89px] md:h-[830.89px] bg-[#F7F7F7]  ">
      <div className=" w-[560px] h-[190px] mx-14 space-y-7 hidden md:inline-block ">
        <h1 className=" w-[560px] h-[58px] text-[48px] font-bold  ">
          Customer testimonials
        </h1>
        <p className=" w-[560px] h-[27px] text-[18px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="  w-[361px] h-[120px]  flex  flex-col items-center justify-center md:hidden mx-auto py-36   ">
        <h1 className=" w-[315px] h-[42px]  text-[32px] font-bold text-center ">
          {" "}
          What Our Student Say
        </h1>
        <p className=" w-[361px] h-[54px] text-[18px] font-normal text-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className=" flex flex-wrap gap-10 justify-start">
        <div className=" w-[363px] ml-14 md:hidden inline-block " key={2}>
          <Carousel>
            <CarouselContent>
              <CarouselContent>
                {cardLoop.map((card, index) => (
                  <CarouselItem key={`carousel-item-${index}`}>
                    {card}
                  </CarouselItem>
                ))}
              </CarouselContent>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className=" ml-12 w-[1168px] ">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className=" md:flex flex-wrap gap-10  hidden     ">
                {card1}
                {card2}
                {card3}
              </div>
            </CarouselItem>
            <CarouselItem>
              {" "}
              <div className=" md:flex flex-wrap gap-10  hidden   ">
                {cardLoop[0]}
                {cardLoop[1]}
                {cardLoop[2]}
              </div>{" "}
            </CarouselItem>
            <CarouselItem>
              <div className=" md:flex flex-wrap gap-10  hidden   ">
                {cardLoop[0]}
                {cardLoop[1]}
                {cardLoop[2]}
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
