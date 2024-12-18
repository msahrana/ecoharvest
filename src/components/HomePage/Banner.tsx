import React from "react";

const Banner = () => {
  return (
    <div
      className="relative h-[30vh] lg:h-[70vh] bg-cover bg-right bg-no-repeat text-white"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/br6jdZv/banner.png)",
      }}
    >
      <div className="pt-10 md:pt-40 pl-12 md:pl-48">
        <h3 className="mb-5 text xl md:text-2xl font-bold">WelCome to</h3>
        <h1 className="mb-5 text-2xl md:text-6xl font-bold">Our Agriculture Furm</h1>
        <button className="btn btn-secondary">Get Started</button>
      </div>
    </div>
  );
};

export default Banner;
