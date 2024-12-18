import Image from "next/image";
import React from "react";
import VideoImg from "../../../public/vodeoIcon.png";

const Videos = () => {
  return (
    <div
      className="hero h-[40vh]"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/svr4fhj/videos.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center">
        <div className="">
          <Image
            src={VideoImg}
            width={60}
            height={60}
            alt="Video"
            className="bg-red-500 rounded-full mx-auto"
          />
          <h3 className="text-2xl text-green-600 font-bold mb-6 italic">
            Watch the Video
          </h3>
          <h1 className="text-5xl text-white md:text-5xl font-bold">
            Agriculture Pure Eco Farming
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Videos;
