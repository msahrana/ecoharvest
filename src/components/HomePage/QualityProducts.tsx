import {FaCheckCircle} from "react-icons/fa";
import Image1 from "../../../public/qualityProduct1.jpeg";
import Image2 from "../../../public/qualityProduct2.png";
import React from "react";
import Image from "next/image";

const QualityProducts = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 bg-[#faf9f4] md:p-20 flex-1 md:m-40 border rounded mx-auto items-center justify-center -translate-y-52">
      <div className="md:w-1/3 p-6">
        <h3 className="text-xl text-[#50AD53] font-bold mb-6 italic">
          Agriculture Furm
        </h3>
        <h1 className="text-3xl md:text-5xl font-bold mb-10">
          Providing High Quality Products
        </h1>
        <p className="pr-5 mb-5">
          Quality agricultural products, such as fresh fruits, vegetables, and
          grains, are packed with essential vitamins, minerals, and
          antioxidants.{" "}
        </p>
        <h2 className="flex gap-2 items-center">
          <FaCheckCircle className="text-[#50AD53]" />
          Sword of Health
        </h2>
        <h2 className="flex gap-2 items-center">
          <FaCheckCircle className="text-[#50AD53]" />
          Shield of Flavor
        </h2>
        <button
          type="button"
          className="px-4 py-3 rounded-md bg-gradient-to-r from-green-300 to-[#50AD53] hover:from-pink-500 hover:to-orange-500 text-white mt-6"
        >
          Support Us
        </button>
      </div>
      <Image
        src={Image1}
        width={600}
        height={500}
        alt="Image1"
        className="w-full md:w-80 h-[500px] rounded-sm"
      />
      <Image
        src={Image2}
        width={600}
        height={500}
        alt="Image1"
        className="w-full md:w-80 h-[500px] rounded-sm"
      />
    </div>
  );
};

export default QualityProducts;
