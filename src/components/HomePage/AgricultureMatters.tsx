import Image1 from "../../../public/matters1.png";
import Image2 from "../../../public/matters2.png";
import Image3 from "../../../public/Batch.png";
import Image from "next/image";
import React from "react";

const AgricultureMatters = () => {
  return (
    <div className="mb-10 container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-5">
        <div>
          <Image
            src={Image3}
            width={400}
            height={300}
            alt="Photo"
            className="md:-translate-y-11 size-72 mx-auto"
          />
        </div>
        <Image
          src={Image2}
          width={400}
          height={300}
          alt="Photo"
          className="rounded h-[480px]"
        />
        <div className="p-4 w-full md:w-1/3">
          <h3 className="text-xl text-[#50AD53] font-bold mb-6 italic">
            Welcome to Agriculture Farm
          </h3>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Agriculture matters
          </h1>
          <p className="text-justify mb-6">
            Whether you`re a seasoned farmer, a gardening enthusiast, or someone
            curious about sustainable living, Eco Harvest is here to inspire,
            educate, and support your journey. Together, let`s grow a better
            tomorrow—one harvest at a time.
          </p>
          <div className="flex justify-between items-center">
            <h4 className="font-semibold">Agriculture</h4>
            <p className="text-[#50AD53] font-bold">78</p>
          </div>
          <div>
            <progress
              className="progress progress-accent w-56"
              value="78"
              max="100"
            ></progress>
          </div>

          <div className="flex justify-between items-center mt-4">
            <h4 className="font-semibold">Organic</h4>
            <p className="text-[#50AD53] font-bold">58</p>
          </div>
          <div>
            <progress
              className="progress progress-accent w-56"
              value="58"
              max="100"
            ></progress>
          </div>

          <div className="flex justify-between items-center mt-4">
            <h4 className="font-semibold">Natural</h4>
            <p className="text-[#50AD53] font-bold">80</p>
          </div>
          <div>
            <progress
              className="progress progress-accent w-56"
              value="80"
              max="100"
            ></progress>
          </div>
          <button
            type="button"
            className="px-4 py-3 rounded-md bg-gradient-to-r from-green-300 to-[#50AD53] hover:from-pink-500 hover:to-orange-500 text-white mt-6"
          >
            Support Us
          </button>
        </div>
      </div>
      <Image
        src={Image1}
        width={400}
        height={300}
        alt="Photo"
        className="h-[300px] rounded md:translate-x-12 md:-translate-y-60"
      />
    </div>
  );
};

export default AgricultureMatters;
