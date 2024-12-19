import {MdOutlineAgriculture} from "react-icons/md";
import {FaUserNurse} from "react-icons/fa";
import {FaUsersGear} from "react-icons/fa6";
import {GrUserManager} from "react-icons/gr";
import React from "react";

const Badge = () => {
  return (
    <div className="md:-translate-y-40 container mx-auto flex flex-col md:flex-row gap-10 items-center justify-center mt-10">
      <div className="flex flex-col items-center justify-center space-y-4">
        <MdOutlineAgriculture className="size-24 bg-slate-200 p-3 rounded-full text-[#50AD53]" />
        <h2 className="text-5xl font-bold text-[#50AD53]">2375</h2>
        <p>Agriculture Products</p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <FaUserNurse className="size-24 bg-slate-200 p-3 rounded-full text-[#50AD53]" />
        <h2 className="text-5xl font-bold text-[#50AD53]">8596</h2>
        <p>Agriculture Products</p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <FaUsersGear className="size-24 bg-slate-200 p-3 rounded-full text-[#50AD53]" />
        <h2 className="text-5xl font-bold text-[#50AD53]">12790</h2>
        <p>Agriculture Products</p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <GrUserManager className="size-24 bg-slate-200 p-3 rounded-full text-[#50AD53]" />
        <h2 className="text-5xl font-bold text-[#50AD53]">2390</h2>
        <p>Agriculture Products</p>
      </div>
    </div>
  );
};

export default Badge;
