import Image from "next/image";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import EngagementModels from "@/components/sections/EngagementModels";

export default function Home() {
  return (
    <div >
      <Hero />
      <Services />
      <EngagementModels />
    </div>
  );
}
