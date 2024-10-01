import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={40}
            height={40}
            className="w-full h-full object-contain rounded-full"
          />
        </div>
        <h1 className="text-white text-[25px] font-semibold">
          NIRMA{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            QURESHI{" "}
          </span>
        </h1>
      </div>
 <div className="flex flex-row gap-5 mb-2">
      {Socials.map((social) => (
        <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
          <Image
            src={social.src}
            alt={social.name}
            width={28}
            height={28}
          />
        </a>
      ))}
    </div>       
    </div>
  );
};

export default Navbar