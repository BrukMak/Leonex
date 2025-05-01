import React from 'react'
import Image from 'next/image'
import Card from '../ui/Card'
import checklist from '../../../public/images/checklist.svg'
import missing_piece from '../../../public/images/missing_piece.svg'
import team from '../../../public/images/team.svg'

const EngagementModels = () => {
  const data = [
        { logo: team, 
          title: "Extended Team", 
          description: "Efficiently scale your core engineering team to meet business demands with flexibility and precision."
        },
        {
          logo: checklist,
          title: "Managed Team",
          description: "Delegate critical parts of your product development to a self-sufficient, fully integrated engineering team aligned with your organization's workflow."
        },
        {
          logo: missing_piece,
          title: "Custom Solution Development",
          description: "Resolve complex business challenges with end-to-end, innovative software solutions tailored to your specific needs."
        }
      ]
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#1631C5] mb-8">
        Engagement Models
      </h2>
      <div className="grid flex-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {
            data.map((item, index) => (
              <Card
                key={index}
                logo={item.logo}
                title={item.title}
                description={item.description}
              />
            ))
          }
    </div>
    </section >
  )
}

export default EngagementModels;
