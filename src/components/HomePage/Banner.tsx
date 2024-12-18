import React from "react";

const Banner = () => {
  return (
    <div
      className="relative h-[32vh] lg:h-[70vh] bg-cover bg-right bg-no-repeat text-white"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/br6jdZv/banner.png)",
      }}
    >
      <div className="pt-10 md:pt-40 pl-12 md:pl-48">
        <h3 className="mb-5 text xl md:text-3xl font-bold">Welcome to Eco Harvest</h3>
        <h1 className="mb-5 text-2xl md:text-6xl font-bold">Our Agriculture Furm</h1>
        <p className="mb-8 font-bold">Explore, Learn, Thrive!</p>
        <button
            type="button"
            className="px-4 py-3 rounded-md bg-gradient-to-r from-green-300 to-[#50AD53] hover:from-pink-500 hover:to-orange-500 "
          >
            Support Us
          </button>
      </div>
    </div>
  );
};

export default Banner;
