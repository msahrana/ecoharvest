import Image1 from "../../../public/slider1.jpg";
import Image2 from "../../../public/slider2.jpeg";
import Image3 from "../../../public/slider3.jpeg";
import Image4 from "../../../public/slider4.jpeg";
import Image from "next/image";
import React from "react";

const OurProjects = () => {
  return (
    <div>
      <div className="mx-auto">
        <h3 className="text-xl text-[#50AD53] font-bold mb-6 italic text-center">
          What we`re doing
        </h3>
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
          Explore Our Projects
        </h1>
        <div className="flex flex-col md:flex-row gap-5 p-4">
          <Image
            src={Image1}
            width={400}
            height={500}
            alt="slide1"
            className="rounded-lg mx-auto w-full md:w-96"
          />
          <Image
            src={Image2}
            width={400}
            height={500}
            alt="slide1"
            className="rounded-lg mx-auto w-full md:w-96"
          />
          <Image
            src={Image3}
            width={400}
            height={500}
            alt="slide1"
            className="rounded-lg mx-auto w-full md:w-96"
          />
          <Image
            src={Image4}
            width={400}
            height={500}
            alt="slide1"
            className="rounded-lg mx-auto w-full md:w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
