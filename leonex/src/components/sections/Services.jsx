import React from "react";
import Card from "../ui/Card";
import coding  from "../../../public/images/coding.svg";
import settings from "../../../public/images/setting.svg";
import group from "../../../public/images/group.svg";

const Services = () => {
  const data = [
    { logo: coding, 
      title: "Software Development", 
      description: "We offer comprehensive software development services, meticulously crafted to meet the diverse needs of our clients. Our expertise spans various technologies and industries, ensuring that our solutions are not only innovative but also aligned with the latest industry trends."},
      {
        logo: settings,
        title: "Talent Outsourcing",
        description: "Our talent outsourcing services provide businesses with access to top-tier IT professionals, ready to support projects and operations. We prioritize matching our talent with your business goals, ensuring a seamless integration into your existing teams."
      },
      {
        logo: group,
        title: "Maintenance & Support",
        description: "We provide comprehensive maintenance and support services, ensuring that your software solutions run smoothly and remain up-to-date. Our proactive approach minimizes downtime and enhances system reliability."
      }
    ]
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#1631C5] mb-8">
        Our Services
      </h2>

      {/* GRID is often easier than flex-wrap for strict columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, i) => (
          <Card
            key={i}
            logo={item.logo}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
