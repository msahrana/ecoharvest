import Image from "next/image";
import React from "react";
import SupporterImg1 from "../../../public/supporter1.png";
import SupporterImg2 from "../../../public/supporter2.jpg";
import SupporterImg3 from "../../../public/supporter3.png";
import SupporterImg4 from "../../../public/supporter4.png";
import SupporterImg5 from "../../../public/supporter5.png";

const Supporters = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl text-center text-[#50AD53] mb-10">Our Supporters</h2>
      <div className="flex flex-col md:flex-row justify-center gap-5 mb-10">
        <Image
          src={SupporterImg1}
          width={400}
          height={400}
          alt="SupporterImage"
          className="size-40 rounded-full mx-auto"
        />
        <Image
          src={SupporterImg2}
          width={400}
          height={400}
          alt="SupporterImage"
          className="size-40 rounded-full mx-auto"
        />
        <Image
          src={SupporterImg3}
          width={400}
          height={400}
          alt="SupporterImage"
          className="size-40 rounded-full mx-auto"
        />
        <Image
          src={SupporterImg4}
          width={400}
          height={400}
          alt="SupporterImage"
          className="size-40 rounded-full mx-auto"
        />
        <Image
          src={SupporterImg5}
          width={400}
          height={400}
          alt="SupporterImage"
          className="size-40 rounded-full mx-auto"
        />
      </div>
    </div>
  );
};

export default Supporters;
