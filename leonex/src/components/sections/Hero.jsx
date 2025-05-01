// src/components/sections/Hero.tsx
import Image from "next/image";
import heroBg from "../../../public/images/bg_image.png";
import heroPattern from "../../../public/images/hero_pattern.svg";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* full-bleed background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={heroBg}
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-blue-950/90 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-20 md:py-32 lg:py-40 flex flex-col justify-center h-screen">
        {/* decorative pattern – bottom-right only */}
        <div className="hidden lg:block absolute bottom-0 right-0 -z-10">
          <Image
            src={heroPattern}
            alt="Pattern"
            priority
            className="w-64 sm:w-96 md:w-[800px] lg:w-[1200px] object-contain select-none"
          />
        </div>

        {/* content */}
        <div className="relative z-10 max-w-2xl space-y-6">
          <div className="inline-flex items-center bg-gray-800 px-4 py-2">
            <div className="w-8 border-b-4 border-[#1631C5] mr-3" />
            <span className="text-sm text-white sm:text-base uppercase font-medium">
              Solutions for your business
            </span>
          </div>

          <h1 className="font-extrabold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            IT Solutions<br />
            <span className="text-[#1631C5]">&</span> Technology
          </h1>

          <p className="text-base text-white sm:text-lg md:text-xl max-w-lg">
            We provide innovative IT solutions designed to enhance efficiency,
            security, and scalability, helping businesses thrive in the digital era.
          </p>

          <button className="mt-4 inline-block bg-[#1631C5] hover:bg-blue-500 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded">
            Discover More
          </button>
        </div>
      </div>

      {/* bottom bar */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-blue-800" />
    </div>
  );
}
