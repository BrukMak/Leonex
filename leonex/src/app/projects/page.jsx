import React from 'react'
import Card from '@/components/ui/Card'
import coding from '../../../public/images/coding.svg'
import akil from '../../../public/images/akil.jpg'
import rateeat from '../../../public/images/rateeat.jpg'
import haset from '../../../public/images/haset.jpg'
import benet from '../../../public/images/benetPharmacy.jpg'
import Link from 'next/link'

const page = () => {
  const projects = [
    {
      logo: akil,
      title: "Akil Connect",
      description: "Akil is a centralized platform designed to connect youth with a wide range of opportunities, including jobs, internships, and volunteering roles.",
      link: "https://play.google.com/store/apps/details?id=org.a2sv.akil_mobile"
    },
    {
      logo: rateeat,
      title: "RateEat",
      description: "RateEat is your ultimate guide for authentic dining experiences, honest reviews, and personalized recommendations.",
      link: "https://rateeat.app/"
    },
    {
      logo: haset,
      title: "Haset Online Shop",
      description: "Our marketplace brings buyers and sellers together on one intuitive platform. Buyers browse, compare, and check out quickly with real-time stock updates.",
      link: "https://hasetshop.com/"
    },
    {
      logo: benet,
      title: "Benet Pharmacy",
      description: "A full pharmacy management system that allows a full control of the pharmacy, including stock management, sales, and customer management.",
      link: "https://benetpharmacy.onrender.com/"
    }
  ]
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#1631C5] mb-8">
        Our Projects
      </h2>
      <p className="text-center text-gray-600 max-w-4xl mx-auto mb-12 text-lg">
    Explore our diverse portfolio, where we blend cutting-edge technology with user-centered design to tackle real-world challenges. From scalable web platforms to intuitive mobile apps, each project highlights our commitment to quality, innovation, and measurable impact.
  </p>

      {/* GRID is often easier than flex-wrap for strict columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((item, i) => (
          <Link 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer">
            
            <Card
              key={i}
              logo={item.logo}
              title={item.title}
              description={item.description}
              />
            </Link>
        ))}
      </div>
    </section>
  )
}

export default page
