import { Button, Image } from "@nextui-org/react";
import React from "react";

const bottomImages = [
  {
    id: "1",
    src: "",
    size: "w-full md:w-1/4",
    alt: "Placeholder image",
  },
  {
    id: "2",
    size: "hidden md:block w-full md:w-1/2",
    src: "",
    alt: "Placeholder image",
  },
  {
    id: "3",
    size: "hidden md:block w-full md:w-1/4",
    src: "",
    alt: "Placeholder image",
  },
];

const HeroSection = () => {
  return (
    <div className="w-11/12 py-3 lg:py-12 flex-col justify-start items-center gap-6 md:gap-12 flex">
      <div className=" justify-start items-center gap-6 md:gap-[60px] flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2 h-full">
          <h5>What is</h5>
          <br />
          <h4 className="text-ft-primary-yellow">Fintech CLub</h4>
          <br />
          <p className="line-clamp-6 md:line-clamp-2 lg:line-clamp-3">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, Contrary to popular belief,
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old. Richard McClintock, a Latin professor at Hampden-Sydney College
            in Virginia,{" "}
          </p>
          <div className="justify-start items-center gap-6 flex">
            <Button
              className="bg-ft-primary-blue text-ft-text-bright"
              variant="solid"
            >
              Read More
            </Button>
            <Button
              className="bg-ft-primary-blue text-ft-text-bright"
              variant="solid"
            >
              Join Us
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[300px] md:h-[200px] lg:h-[300px] rounded-xl relative border-2 border-black">
          <Image
            className="w-full h-full absolute object-cover"
            src=""
            alt="Placeholder image"
          />
        </div>
      </div>
      <div className="flex-col md:flex-row justify-end items-center gap-12 flex w-full">
        {bottomImages.map((img, _idx) => (
          <div
            key={img.id}
            className={`h-[300px] md:h-[200px] lg:h-[300px] relative border-2 rounded-xl border-black 
							${img.size}`}
          >
            <Image
              className="w-full h-full absolute object-cover"
              src={img.src}
              alt={img.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
