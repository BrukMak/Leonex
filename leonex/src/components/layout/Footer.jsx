import React from "react";
import Image from "next/image";
import white_logo from "../../../public/images/leonex_logo_white.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1631C5] text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Logo & Rights */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <Image
            src={white_logo}
            alt="Leonex logo"
            width={180}
            height={32}
            priority
          />
          <p className="mt-4 text-sm">© 2025 All Rights Reserved.</p>
        </div>

        {/* Services */}
        <div className="flex flex-col">
          <h2 className="flex items-center text-lg font-semibold">
            <span className="inline-block w-1 h-8 bg-white mr-3" />
            Services
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Software Development</li>
            <li>Talent Outsourcing</li>
            <li>Maintenance & Support</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col">
          <h2 className="flex items-center text-lg font-semibold">
            <span className="inline-block w-1 h-8 bg-white mr-3" />
            Get In Touch
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Location: Addis Ababa, Ethiopia</li>
            <li>Email: info@leonex.com</li>
            <li>Phone: +251 11 123 4567</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
