import Image from "next/image";
import React from "react";
import {FaAppStore} from "react-icons/fa6";
import {GiGreenhouse} from "react-icons/gi";
import {LuAnnoyed} from "react-icons/lu";
import {RxAccessibility} from "react-icons/rx";
import Image1 from "../../../public/product1.jpeg";
import Image2 from "../../../public/product2.jpeg";
import Image3 from "../../../public/product3.png";
import Image4 from "../../../public/product4.jpeg";

const ServicesOffer = () => {
  return (
    <div className="mx-auto text-center my-10">
      <h3 className="text-xl text-[#50AD53] font-bold mb-6">
        What we`re Doing
      </h3>
      <h1 className="text-3xl md:text-5xl font-bold mb-10">
        Services We Offer!
      </h1>
      <div className="">
        <div className="flex flex-col md:flex-row gap-5 mx-auto text-center justify-evenly items-center">
          <div>
            <Image
              src={Image1}
              width={400}
              height={400}
              alt="Image1"
              className="size-60 rounded-full"
            />
            <FaAppStore className="size-12 bg-green-600 text-white rounded-full p-1 translate-x-40 -translate-y-60" />
            <p className="text-xl font-bold mt-">Fresh Products</p>
          </div>
          <div>
            <Image
              src={Image2}
              width={400}
              height={400}
              alt="Image1"
              className="size-60 rounded-full"
            />
            <GiGreenhouse className="size-12 bg-green-600 text-white rounded-full p-1 translate-x-40 -translate-y-60" />
            <p className="text-xl font-bold mt-">Fresh Frouts</p>
          </div>
          <div>
            <Image
              src={Image3}
              width={400}
              height={400}
              alt="Image1"
              className="size-60 rounded-full"
            />
            <LuAnnoyed className="size-12 bg-green-600 text-white rounded-full p-1 translate-x-40 -translate-y-60" />
            <p className="text-xl font-bold mt-">Fresh Vegetables</p>
          </div>
          <div>
            <Image
              src={Image4}
              width={400}
              height={400}
              alt="Image1"
              className="size-60 rounded-full"
            />
            <RxAccessibility className="size-12 bg-green-600 text-white rounded-full p-1 translate-x-40 -translate-y-60" />
            <p className="text-xl font-bold mt-">Fresh Vegetables</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOffer;
