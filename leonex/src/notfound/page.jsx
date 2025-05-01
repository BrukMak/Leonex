import React from 'react'
import notfound from '../../public/images/notfound.jpg'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <Image
        src={notfound}
        alt="Not Found"
        width={1000}
        height={1000}
        className="w-full h-auto object-cover"
      />
    </div>
  )
}

export default page
