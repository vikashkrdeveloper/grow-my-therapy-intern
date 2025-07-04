import React from "react";
import Image from "next/image";
import logoImage from "@/assets/logo-transparent.png";

const HeaderSection = () => {
  return (
    <header className="relative z-20 w-full pointer-events-auto pb-[3vw] flex items-center flex-nowrap">
      {/* Image/Logo */}
      <a href="/" className="w-auto h-[70px]">
        <Image src={logoImage} alt="Logo" className="w-auto h-full" />
      </a>
      {/* Navigation */}
      <nav className="grow shrink">
        <ul className="">
          <li></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderSection;
