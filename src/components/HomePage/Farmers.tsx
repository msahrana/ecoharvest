import Farmer1 from "../../../public/farmer1.png";
import Farmer2 from "../../../public/farmer2.png";
import Farmer3 from "../../../public/farmer3.png";
import {AiFillTwitterCircle} from "react-icons/ai";
import {FaFacebook, FaPinterest} from "react-icons/fa";
import {FaPhone} from "react-icons/fa6";
import {TfiEmail} from "react-icons/tfi";
import Image from "next/image";
import React from "react";

const Farmers = () => {
  return (
    <div>
      <div className="mx-auto mt-10 md:my-28">
        <h3 className="text-xl text-[#50AD53] font-bold mb-6 italic text-center">
          What we`re doing
        </h3>
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
          Experienced Farmers
        </h1>
        <div className="p-4 flex flex-col md:flex-row gap-5 mx-auto items-center justify-center">
          <Image
            src={Farmer1}
            width={400}
            height={450}
            alt="farmerImage1"
            className="size-36 rounded-full"
          />
          <Image
            src={Farmer2}
            width={400}
            height={450}
            alt="farmerImage1"
            className="size-72 rounded-full"
          />
          <div className="space-y-3">
            <h4 className="text-[#50AD53] font-bold mb-6 italic">
              Senior Farmer
            </h4>
            <h2 className="text-2xl md:text-3xl font-bold">
              Hillion Markjakar
            </h2>
            <p className="text-justify">
              Farming is not just a job; it’s a way of life, <br /> Farmer
              Hillion Markjakar says. And every seed we plant is a step toward a
              brighter, greener future.
            </p>
            <p className="mb-6 italic flex items-center gap-5">
              <FaPhone />
              <span className="text-[#50AD53]">+880 1722 445288</span>
            </p>
            <p className="mb-6 italic flex items-center gap-5">
              <TfiEmail />
              <span className="text-[#50AD53]">example@gmail.com</span>
            </p>
            <div className="flex gap-3 mt-5 items-center">
              <FaFacebook className="text-[#50AD53] size-8" />
              <AiFillTwitterCircle className="text-[#50AD53] size-9" />
              <FaPinterest className="text-[#50AD53] size-8" />
            </div>
          </div>
          <Image
            src={Farmer3}
            width={400}
            height={450}
            alt="farmerImage1"
            className="size-36 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Farmers;
