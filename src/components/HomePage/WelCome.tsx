import Image from "next/image";
import React from "react";
import WelComeLogo from "../../../public/welcome.jpg";
import WelComeLogo1 from "../../../public/welcome0.jpeg";
import {FaCheckCircle} from "react-icons/fa";

const WelCome = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src={WelComeLogo}
          width={600}
          height={400}
          alt="Logo1"
          className="w-full h-64 md:h-full"
        />
        <div className="p-2">
          <h3 className="text-xl text-[#50AD53] font-bold mb-6 italic">
            Welcome to Eco Harvest
          </h3>
          <h1 className="text-3xl md:text-5xl font-bold">
            Need For Agriculture!
          </h1>
          <p className="py-6 text-justify">
            At Eco Harvest, we are dedicated to cultivating a greener, more
            sustainable future. Our platform is your gateway to discovering
            innovative agricultural practices, eco-friendly farming solutions,
            and a community passionate about nurturing the earth.
          </p>
          <div className="flex flex-row gap-5 bg-white mb-6 rounded-md">
            <Image
              src={WelComeLogo1}
              width={400}
              height={200}
              alt="Logo2"
              className="rounded-l-md h-36 md:h-48 w-48 md:w-96"
            />
            <div className="flex flex-col justify-center space-y-3 text-center">
              <p className="flex gap-2 items-center text-sm md:text-lg">
                <FaCheckCircle className="text-[#50AD53]" />
                Best Quality Standards
              </p>
              <p className="flex gap-2 items-center text-sm md:text-lg">
                <FaCheckCircle className="text-[#50AD53]" />
                Best Quality Standards
              </p>
              <p className="flex gap-2 items-center text-sm md:text-lg">
                <FaCheckCircle className="text-[#50AD53]" />
                Best Quality Standards
              </p>
            </div>
            <div></div>
          </div>
          <button
            type="button"
            className="px-4 py-3 rounded-md bg-gradient-to-r from-green-300 to-[#50AD53] hover:from-pink-500 hover:to-orange-500 text-white"
          >
            Support Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelCome;
