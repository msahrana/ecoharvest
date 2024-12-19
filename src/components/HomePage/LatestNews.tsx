import Parson1 from "../../../public/Person01.png";
import Parson2 from "../../../public/Person02.png";
import UserImg from "../../../public/Sa_Rana01.jpg";
import {FaComments, FaEye} from "react-icons/fa";
import Image from "next/image";
import React from "react";

const LatestNews = () => {
  return (
    <div className="container mx-auto text-center my-20">
      <h3 className="text-xl text-[#50AD53] font-bold mb-6 italic">
        What we`re doing
      </h3>
      <h1 className="text-3xl md:text-5xl font-bold">Latest News & Articles</h1>
      <div className="md:mx-36 my-5">
        <div className="flex flex-col md:flex-row bg-[#f7f7f7]">
          <div className="text-start pt-4 md:pt-20 pl-4 md:pl-20 space-y-5">
            <h5 className="text-2xl md:text-4xl font-bold">
              Health Food For Growing
            </h5>
            <div className="flex gap-20">
              <p className="flex gap-3 items-center">
                <FaComments className="text-[#50AD53]" />
                09 Coments
              </p>
              <p className="flex gap-3 items-center">
                <FaEye className="text-[#50AD53]" />
                235 Views
              </p>
            </div>
            <p className="text-justify p-4">
              Producers of high-quality goods earn the respect and loyalty of
              their consumers, building relationships founded on transparency,
              care, and excellence.
            </p>
            <div className="flex gap-3 items-center">
              <Image
                src={UserImg}
                width={400}
                height={400}
                alt="UserImage"
                className="size-12 rounded-full"
              />
              <p className="text-blue-500">Md. Sayed Anower Rana</p>
            </div>
          </div>
          <Image
            src={Parson1}
            width={400}
            height={400}
            alt="Images"
            className="md:w-1/2 h-[500px]"
          />
        </div>
        <div className="flex flex-col md:flex-row-reverse bg-[#f7f7f7] mt-5">
          
          <div className="text-start pt-4 md:pt-20 pl-4 md:pl-20 space-y-5">
            <h2 className="text-2xl md:text-4xl font-bold">
              Health Food For Growing
            </h2>
            <div className="flex gap-20">
              <p className="flex gap-3 items-center">
                <FaComments className="text-[#50AD53]" />
                09 Coments
              </p>
              <p className="flex gap-3 items-center">
                <FaEye className="text-[#50AD53]" />
                235 Views
              </p>
            </div>
            <p className="text-justify p-4">
              With their longer shelf life, quality products light the way to
              reduced food waste, ensuring nothing is lost and every resource is
              respecte
            </p>
            <div className="flex gap-3 items-center">
              <Image
                src={UserImg}
                width={400}
                height={400}
                alt="UserImage"
                className="size-12 rounded-full"
              />
              <p className="text-blue-500">Md. Sayed Anower Rana</p>
            </div>
          </div>
          <Image
            src={Parson2}
            width={400}
            height={400}
            alt="Images"
            className="md:w-1/2 h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
