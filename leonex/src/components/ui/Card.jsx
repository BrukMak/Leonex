import React from 'react'
import Image from 'next/image'

function Card(item) {
  return (
    <div className= "flex flex-col items-center border-1 border-gray-400 justify-center px-15 py-15 h-auto w-auto rounded-lg shadow-xl space-y-8 hover:scale-105 hover:shadow-2xl">  
        <Image
        src={item.logo}
        alt="Logo"
        width={50}
        height={50}
        className="mb-4"
         />
      <h2 className="text-gray-600">{item.title}</h2>
        <p className="text-center font-extralight text-sm text-gray-500">{item.description}</p>
    </div>
  )
}

export default Card
