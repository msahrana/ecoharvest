import React from "react";

const WhySection = () => {
  return (
    <div
      className="relative h-[70vh] bg-cover bg-right bg-no-repeat inset-0 bg-gradient-to-r from-gray-400 to bg-gray-100 my-10"
      style={{
        backgroundImage: `linear-gradient(45deg,rgba(7,25,82,1), rgba(0,0,0,0.3)), url('https://i.ibb.co.com/Q8jb5HR/why.jpg')`,
      }}
    >
      <div className="p-4 md:pl-48 pt-2 md:pt-20 space-y-5 w-full md:w-1/2 text-white">
        <h3 className="text-xl text-[#50AD53] font-bold mb-6 italic">
          Welcome to Eco Harvest
        </h3>
        <h1 className="text-2xl md:text-5xl font-bold">
          Why Agriculture and Eco is for the Envoirment
        </h1>
        <p className="text-justify italic opacity-60">
          Pure and responsibly grown, these products are free from harmful
          chemicals, offering a safe haven for your body and mind. Protect
          yourself and your loved ones with nature`s finest.
        </p>
        <div className="space-y-4">
          <h4 className="uppercase text-xl text-[#50AD53] font-bold">
            Grab The Offer
          </h4>
          <div className="flex gap-10">
            <div className="uppercase text-center">
              <h4 className="bg-white rounded-full size-8 text-black text-center pt-1 font-bold mb-4">
                31
              </h4>
              <p>Days</p>
            </div>
            <div className="uppercase">
              <h4 className="bg-white rounded-full size-8 text-black text-center pt-1 font-bold mb-4">
                12
              </h4>
              <p>Hours</p>
            </div>
            <div className="uppercase">
              <h4 className="bg-white rounded-full size-8 text-black text-center pt-1 font-bold mb-4">
                10
              </h4>
              <p>Mins</p>
            </div>
            <div className="uppercase">
              <h4 className="bg-white rounded-full size-8 text-black text-center pt-1 font-bold mb-4">
                39
              </h4>
              <p>Secs</p>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="px-4 py-3 rounded-md bg-gradient-to-r from-green-300 to-[#50AD53] hover:from-pink-500 hover:to-orange-500 text-white"
        >
          Support Us
        </button>
      </div>
    </div>
  );
};

export default WhySection;
