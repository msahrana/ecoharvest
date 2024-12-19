import Frouts1 from "../../../public/frout1.webp";
import Frouts2 from "../../../public/frout2.jpeg";
import Frouts3 from "../../../public/frout3.jpeg";
import Frouts4 from "../../../public/frout4.jpg";
import {CiHeart} from "react-icons/ci";
import Image from "next/image";
import React from "react";

const OrganicProducts = () => {
  return (
    <div className="container mx-auto text-center my-20">
      <h3 className="text-xl text-[#50AD53] font-bold mb-6 italic">
        What we`re doing
      </h3>
      <h1 className="text-3xl md:text-5xl font-bold">Organic Products</h1>
      <div className="flex flex-col md:flex-row gap-5 my-8">
        <div className="border rounded-md p-4">
          <p className="bg-gradient-to-r from-green-300 to-[#50AD53] text-white rounded-full w-16 translate-x-1 translate-y-1 absolute">
            Fresh
          </p>
          <p className="bg-base-200 rounded-full size-8 translate-x-[299px] translate-y-1 absolute">
            <CiHeart className="mt-1 ml-1 text-2xl" />
          </p>
          <Image
            src={Frouts1}
            width={400}
            height={400}
            alt="fruitsImage"
            className="h-56 rounded-t-md"
          />
          <div className="divider"></div>
          <div className="flex justify-between px-2 mt-5">
            <h2 className="text-xl font-bold text-left">Capsicum</h2>
            <p className="opacity-50 text-left">$ 18.00</p>
          </div>
        </div>
        <div className="border rounded-md p-4">
          <p className="bg-gradient-to-r from-green-300 to-[#50AD53] text-white rounded-full w-16 translate-x-1 translate-y-1 absolute">
            Fresh
          </p>
          <p className="bg-base-200 rounded-full size-8 translate-x-[299px] translate-y-1 absolute">
            <CiHeart className="mt-1 ml-1 text-2xl" />
          </p>
          <Image
            src={Frouts2}
            width={400}
            height={400}
            alt="fruitsImage"
            className="h-56 rounded-t-md"
          />
          <div className="divider"></div>
          <div className="flex justify-between px-2 mt-5">
            <h2 className="text-xl font-bold text-left">Mixed</h2>
            <p className="opacity-50 text-left">$ 25.00</p>
          </div>
        </div>
        <div className="border rounded-md p-4">
          <p className="bg-gradient-to-r from-green-300 to-[#50AD53] text-white rounded-full w-16 translate-x-1 translate-y-1 absolute">
            Fresh
          </p>
          <p className="bg-base-200 rounded-full size-8 translate-x-[299px] translate-y-1 absolute">
            <CiHeart className="mt-1 ml-1 text-2xl" />
          </p>
          <Image
            src={Frouts3}
            width={400}
            height={400}
            alt="fruitsImage"
            className="h-56 rounded-t-md"
          />
          <div className="divider"></div>
          <div className="flex justify-between px-2 mt-5">
            <h2 className="text-xl font-bold text-left">Vegetable</h2>
            <p className="opacity-50 text-left">$ 28.00</p>
          </div>
        </div>
        <div className="border rounded-md p-4">
          <p className="bg-gradient-to-r from-green-300 to-[#50AD53] text-white rounded-full w-16 translate-x-1 translate-y-1 absolute">
            Fresh
          </p>
          <p className="bg-base-200 rounded-full size-8 translate-x-[299px] translate-y-1 absolute">
            <CiHeart className="mt-1 ml-1 text-2xl text-red-600" />
          </p>
          <Image
            src={Frouts4}
            width={400}
            height={400}
            alt="fruitsImage"
            className="h-56 rounded-t-md"
          />
          <div className="divider"></div>
          <div className="flex justify-between px-2 mt-5">
            <h2 className="text-xl font-bold text-left">Apple</h2>
            <p className="opacity-50 text-left">$ 20.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganicProducts;
