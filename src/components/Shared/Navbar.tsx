import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 flex justify-between">
      <div className="flex-1">
        <Link href={"/"} className="btn btn-ghost text-xl">
          EcoHarvest
        </Link>
      </div>
      <div className="mr-20">
        <ul className="flex gap-5">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
        </ul>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image
                src={
                  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
                width={600}
                height={400}
                alt="logo"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href={"/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <div className="mx-auto items-center w-full">
              <button className="text-center bg-gray-300 w-full py-1 text-red-500">
                Logout
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
